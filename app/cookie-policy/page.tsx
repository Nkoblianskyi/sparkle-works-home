import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cookie, Settings, BarChart, Target, Mail } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Website Information</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            This policy explains how SparkleWorksHome uses cookies and similar technologies on our website to enhance your
            browsing experience.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Cookie className="h-6 w-6 text-orange-600 mr-2" />
                What Are Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit
                a website. They help websites remember information about your visit, such as your preferred language and
                other settings, which can make your next visit easier and the site more useful to you.
              </p>
              <p className="text-gray-600">
                Cookies play an important role in enhancing your user experience by enabling websites to remember your
                preferences, keep you logged in, and provide personalized content.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>How We Use Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                SparkleWorksHome uses cookies to improve your experience on our website and to help us understand how our site
                is being used. We use cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>To remember your preferences and settings</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To provide personalized content and recommendations</li>
                <li>To improve website functionality and performance</li>
                <li>To enable social media features and integrations</li>
                <li>To deliver relevant advertisements (with your consent)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Types of Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <div className="flex items-center mb-2">
                  <Settings className="h-5 w-5 text-green-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Essential Cookies</h4>
                </div>
                <p className="text-gray-600 mb-2">
                  These cookies are necessary for the website to function properly. They enable basic functions like
                  page navigation, form submissions, and access to secure areas.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Examples:</strong> Session management, security tokens, load balancing
                </p>
                <p className="text-sm text-green-600 font-medium">These cookies cannot be disabled.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <div className="flex items-center mb-2">
                  <BarChart className="h-5 w-5 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Analytics Cookies</h4>
                </div>
                <p className="text-gray-600 mb-2">
                  These cookies help us understand how visitors interact with our website by collecting and reporting
                  information anonymously.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Examples:</strong> Google Analytics, page views, bounce rate, traffic sources
                </p>
                <p className="text-sm text-blue-600 font-medium">You can opt out of these cookies.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex items-center mb-2">
                  <Target className="h-5 w-5 text-purple-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Marketing Cookies</h4>
                </div>
                <p className="text-gray-600 mb-2">
                  These cookies are used to deliver advertisements that are relevant to you and your interests. They may
                  also be used to limit the number of times you see an advertisement.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Examples:</strong> Facebook Pixel, Google Ads, retargeting pixels
                </p>
                <p className="text-sm text-purple-600 font-medium">These require your explicit consent.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Some cookies on our website are set by third-party services that appear on our pages. We use the
                following third-party services:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                  <p className="text-gray-600 text-sm">
                    Helps us understand website usage and improve user experience. Data is anonymized and aggregated.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Maps</h4>
                  <p className="text-gray-600 text-sm">
                    Enables interactive maps and location services on our contact page.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Social Media Plugins</h4>
                  <p className="text-gray-600 text-sm">
                    Allows you to share content on social media platforms and see embedded social media content.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Managing Your Cookie Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">You have several options for managing cookies on our website:</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cookie Banner</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    When you first visit our website, you'll see a cookie banner where you can accept or decline
                    non-essential cookies.
                  </p>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    Manage Cookie Preferences
                  </Button>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Browser Settings</h4>
                  <p className="text-gray-600 text-sm">
                    You can control cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm mt-2 ml-4 space-y-1">
                    <li>View and delete cookies</li>
                    <li>Block cookies from specific sites</li>
                    <li>Block third-party cookies</li>
                    <li>Clear all cookies when you close the browser</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Opt-Out Links</h4>
                  <p className="text-gray-600 text-sm">You can opt out of specific tracking services:</p>
                  <ul className="list-disc list-inside text-gray-600 text-sm mt-2 ml-4 space-y-1">
                    <li>
                      <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Analytics Opt-out
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/settings?tab=ads"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook Ad Preferences
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Impact of Disabling Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                While you can browse our website with cookies disabled, some functionality may be limited:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Contact forms may not work properly</li>
                <li>Your preferences won't be remembered between visits</li>
                <li>Some interactive features may not function</li>
                <li>We won't be able to provide personalized content</li>
                <li>Website performance analytics will be affected</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us About Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions about our use of cookies or this cookie policy, please contact us:
              </p>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-orange-600 mr-3" />
                <span className="text-gray-600">privacy@SparkleWorksHome.com</span>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                For more information about how we handle your personal data, please see our{" "}
                <a href="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
