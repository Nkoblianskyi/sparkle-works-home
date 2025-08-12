import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, Award, Shield, Heart, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Our Story</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About SparkleWorksHome Netherlands</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over a decade, we've been transforming spaces across Netherlands with our professional cleaning
              services. Our commitment to excellence, eco-friendly practices, and customer satisfaction has made us the
              trusted choice for thousands of homes and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                SparkleWorksHome was founded in 2014 by Maria and Jan van der Berg, a Dutch couple who recognized the need for
                reliable, eco-friendly cleaning services in Netherlands. Starting with just a small team and a vision to
                provide exceptional cleaning services, we've grown to become one of the most trusted cleaning companies
                in the region.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                What began as a local Amsterdam operation has expanded to serve clients across major Dutch cities
                including Utrecht, Rotterdam, The Hague, and beyond. Our growth has been driven by word-of-mouth
                recommendations and our unwavering commitment to quality service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to employ over 50 trained professionals who share our passion for creating clean,
                healthy environments for our clients. Every member of our team is background-checked, fully trained, and
                committed to upholding our high standards of service.
              </p>
            </div>
            <div className="relative">
              <img
                src="/8c5d3111b1d1a9caf28c3522b1cda542.jpg"
                alt="SparkleWorksHome team at work"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our clients every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Care & Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We treat every space as if it were our own, with genuine care and attention to detail.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Trust & Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our clients trust us with their most valuable spaces, and we honor that trust every day.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We strive for perfection in every task, continuously improving our methods and services.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're committed to protecting the environment through eco-friendly products and practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              The passionate individuals who lead SparkleWorksHome's mission to transform spaces across Netherlands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <img
                  src="/girl.png"
                  alt="Maria van der Berg"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Maria van der Berg</h3>
                <p className="text-emerald-600 font-medium mb-3">Co-Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With 15+ years in the cleaning industry, Maria leads our strategic vision and ensures every client
                  receives exceptional service.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <img
                  src="/boy-2.png"
                  alt="Jan van der Berg"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Jan van der Berg</h3>
                <p className="text-emerald-600 font-medium mb-3">Co-Founder & Operations Director</p>
                <p className="text-gray-600 text-sm">
                  Jan oversees our daily operations and training programs, ensuring our team maintains the highest
                  standards of quality.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <img
                  src="/woman-1.png"
                  alt="Sophie Janssen"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Sophie Janssen</h3>
                <p className="text-emerald-600 font-medium mb-3">Customer Experience Manager</p>
                <p className="text-gray-600 text-sm">
                  Sophie ensures every client interaction exceeds expectations and manages our quality assurance
                  programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-emerald-100">A decade of excellence serving Netherlands</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <p className="text-emerald-100">Years of Service</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5,000+</div>
              <p className="text-emerald-100">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <p className="text-emerald-100">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">8</div>
              <p className="text-emerald-100">Cities Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Certifications & Memberships</h2>
            <p className="text-xl text-gray-600">
              We maintain the highest industry standards through continuous training and certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">ISO 9001 Certified</h3>
              <p className="text-gray-600">
                Quality management system certification ensuring consistent service delivery
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fully Insured & Bonded</h3>
              <p className="text-gray-600">Comprehensive insurance coverage protecting our clients and team members</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Industry Association Member</h3>
              <p className="text-gray-600">Active member of the Dutch Cleaning Services Association</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience the SparkleWorksHome Difference?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied clients who trust us with their cleaning needs across Netherlands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
