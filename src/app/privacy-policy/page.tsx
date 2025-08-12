import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Mail, Phone, MapPin } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Legal Information</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your privacy is important to us. This policy explains how SparkleWorksHome collects, uses, and protects your
            personal information.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-2" />
                  1. Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                  <p className="text-gray-600">
                    When you use our services or contact us, we may collect the following personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Full name and contact details (email, phone number, address)</li>
                    <li>Service preferences and cleaning requirements</li>
                    <li>Billing and payment information</li>
                    <li>Communication history and service feedback</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Automatically Collected Information</h4>
                  <p className="text-gray-600">
                    We may automatically collect certain information when you visit our website:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website and search terms used</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">We use your personal information for the following purposes:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Providing and managing our cleaning services</li>
                  <li>Scheduling appointments and sending service reminders</li>
                  <li>Processing payments and maintaining billing records</li>
                  <li>Communicating with you about our services</li>
                  <li>Improving our services and customer experience</li>
                  <li>Complying with legal obligations and protecting our rights</li>
                  <li>Sending promotional materials (with your consent)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>3. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>With our employees and contractors who need access to provide services</li>
                  <li>With payment processors for billing purposes</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>In case of business transfer or merger (with prior notice)</li>
                  <li>With your explicit consent for specific purposes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Secure data transmission using SSL encryption</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Employee training on data protection and privacy</li>
                  <li>Secure storage and backup systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>5. Your Rights Under GDPR</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  As a resident of the European Union, you have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    <strong>Right of Access:</strong> Request copies of your personal data
                  </li>
                  <li>
                    <strong>Right to Rectification:</strong> Request correction of inaccurate data
                  </li>
                  <li>
                    <strong>Right to Erasure:</strong> Request deletion of your personal data
                  </li>
                  <li>
                    <strong>Right to Restrict Processing:</strong> Request limitation of data processing
                  </li>
                  <li>
                    <strong>Right to Data Portability:</strong> Request transfer of your data
                  </li>
                  <li>
                    <strong>Right to Object:</strong> Object to processing of your personal data
                  </li>
                  <li>
                    <strong>Right to Withdraw Consent:</strong> Withdraw consent at any time
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>6. Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our website uses cookies to improve your browsing experience. We use:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> Required for website functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand website usage
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)
                  </li>
                </ul>
                <p className="text-gray-600 mt-4">
                  You can control cookie settings through your browser preferences. For more details, see our{" "}
                  <a href="/cookie-policy" className="text-blue-600 hover:underline">
                    Cookie Policy
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>7. Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We retain your personal information only as long as necessary for the purposes outlined in this policy
                  or as required by law. Generally, we keep:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                  <li>Customer service records for 7 years</li>
                  <li>Marketing communications until you unsubscribe</li>
                  <li>Website analytics data for 2 years</li>
                  <li>Financial records as required by Dutch law</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>8. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We may update this privacy policy from time to time to reflect changes in our practices or legal
                  requirements. We will notify you of any material changes by posting the updated policy on our website
                  and updating the "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this privacy policy or wish to exercise your rights, please contact
                  us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-600">privacy@SparkleWorksHome.nl</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-600">+3120687154</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <div className="text-gray-600">
                      <p>SparkleWorksHome Netherlands</p>
                      <p>Herengracht 123</p>
                      <p>1015 BG Amsterdam, Netherlands</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
