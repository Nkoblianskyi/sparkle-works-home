import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react"
import { getServiceBySlug, services } from "@/data/services"

interface ServicePageProps {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }))
}

export default function ServicePage({ params }: ServicePageProps) {
    const service = getServiceBySlug(params.slug)

    if (!service) {
        notFound()
    }

    const typedService = service as NonNullable<typeof service>

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-8 bg-gradient-to-br from-blue-600 to-red-600">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div className="text-white">
                                <h1 className="text-4xl lg:text-5xl font-bold mb-4">{typedService.title}</h1>
                                <p className="text-xl mb-6 text-blue-100">{typedService.description}</p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                                        <Link href="/contact">
                                            Get Free Quote
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative">
                                <Image
                                    src={typedService.image || "/placeholder.svg"}
                                    alt={typedService.title}
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* What's Included */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-gray-900">What's Included</h2>
                                <div className="space-y-4">
                                    {typedService.features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Our Process */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Process</h2>
                                <div className="space-y-6">
                                    {typedService.process.map((step, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                                                <p className="text-gray-600">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Why Choose Our {typedService.title}?</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {typedService.benefits.map((benefit, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-8 bg-gradient-to-r from-blue-600 to-red-600">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                        <p className="text-xl mb-8 text-blue-100">
                            Contact SparkleWorksHome today for a free consultation and quote for your{" "}
                            {typedService.title.toLowerCase()} needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                                <Link href="/contact">
                                    <Mail className="mr-2 h-5 w-5" />
                                    Get Free Quote
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
