"use client"

import type React from "react"
import { ServiceCard } from "@/components/service-card"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Sparkles, Shield, Clock, Users, CheckCircle, Star, ChevronDown } from "lucide-react"
import { SuccessModal } from "@/components/success-modal"
import { services } from "@/data/services"

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsModalOpen(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How often should I schedule cleaning services?",
      answer:
        "The frequency depends on your needs and lifestyle. Most residential clients prefer weekly or bi-weekly cleaning, while offices typically need daily or weekly service. We can help you determine the best schedule during your consultation.",
    },
    {
      question: "Do you bring your own cleaning supplies and equipment?",
      answer:
        "Yes, we bring all necessary cleaning supplies and professional-grade equipment. We use eco-friendly, non-toxic products that are safe for your family and pets. If you have specific product preferences, we're happy to accommodate.",
    },
    {
      question: "Are your cleaners insured and background-checked?",
      answer:
        "Absolutely. All our cleaning professionals are fully insured, bonded, and have undergone thorough background checks. We also provide ongoing training to ensure the highest quality service.",
    },
    {
      question: "What if I'm not satisfied with the cleaning?",
      answer:
        "We offer a 100% satisfaction guarantee. If you're not completely happy with our service, contact us within 24 hours and we'll return to address any concerns at no additional cost.",
    },
    {
      question: "How do I prepare my space for cleaning?",
      answer:
        "Minimal preparation is needed. We recommend securing valuable items, clearing surfaces of personal belongings, and ensuring our team has access to all areas to be cleaned. We'll provide a detailed checklist when you book.",
    },
    {
      question: "Do you offer emergency or same-day cleaning services?",
      answer:
        "Yes, we understand that cleaning emergencies happen. We offer same-day and emergency cleaning services subject to availability. Contact us as early as possible for the best chance of accommodation.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-red-50 py-6 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Professional Cleaning Services</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Spotless Spaces, <span className="text-red-600">Guaranteed</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your home or office with our professional cleaning services across Netherlands. We use
                eco-friendly products and proven techniques to deliver exceptional results every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3">
                  <Link href="/contact">Book Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 bg-transparent border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/02e69aa3e2f229da5bc34f2fdadd21fa.jpg"
                alt="Professional cleaning team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose SparkleWorksHome Netherlands?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With over 10 years of experience serving clients across Netherlands, we've built our reputation on
              reliability, quality, and customer satisfaction. Our team of trained professionals uses state-of-the-art
              equipment and eco-friendly cleaning solutions to ensure your spaces are not just clean, but healthy and
              safe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-600">Complete insurance coverage for your peace of mind</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Safe, non-toxic cleaning products for your family</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Available 7 days a week to fit your schedule</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Cleaning Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From residential to commercial spaces, we provide comprehensive cleaning solutions tailored to your
              specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Advantages Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why We're Different</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence sets us apart from other cleaning services in Netherlands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trained Professionals</h3>
              <p className="text-gray-600">All staff are background-checked and professionally trained</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">100% satisfaction guarantee or we'll return to fix it</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Always On Time</h3>
              <p className="text-gray-600">Punctual service that respects your schedule</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Equipment</h3>
              <p className="text-gray-600">Latest cleaning technology and eco-friendly products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "SparkleWorksHome transformed our office space completely. Their attention to detail is incredible, and the
                  team is always professional and punctual. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <img
                    src="/boy.png"
                    alt="Sarah van der Berg"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Sarah van der Berg</p>
                    <p className="text-sm text-gray-500">Office Manager, Amsterdam</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "After our home renovation, SparkleWorksHome made everything spotless. They removed all the dust and debris,
                  and our house looked better than new. Excellent service!"
                </p>
                <div className="flex items-center">
                  <img
                    src="/man.png"
                    alt="Mark de Vries"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Mark de Vries</p>
                    <p className="text-sm text-gray-500">Homeowner, Utrecht</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "We use SparkleWorksHome for our warehouse facility monthly. They're reliable, thorough, and understand the
                  specific needs of industrial spaces. Great value for money."
                </p>
                <div className="flex items-center">
                  <img
                    src="/woman.png"
                    alt="Lisa Janssen"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Lisa Janssen</p>
                    <p className="text-sm text-gray-500">Facility Manager, Rotterdam</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to the most common questions about our cleaning services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gray-50">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Get Your Free Quote Today</h2>
            <p className="text-xl text-gray-600">
              Ready to experience the SparkleWorksHome difference? Contact us for a personalized quote.
            </p>
          </div>

          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+3120687154"
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Type</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="mt-1"
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Preferred Time</Label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (8:00-12:00)</option>
                      <option value="afternoon">Afternoon (12:00-17:00)</option>
                      <option value="evening">Evening (17:00-20:00)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your cleaning needs, property size, special requirements, etc."
                    className="mt-1"
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700">
                  Get Free Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
