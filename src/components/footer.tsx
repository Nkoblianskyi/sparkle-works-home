import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Image src="/favicon.ico" alt="SparkleWorksHome Logo" width={40} height={40} />
              SparkleWorksHome
            </Link>
            <p className="text-gray-300 mb-4">
              Professional cleaning services across Netherlands. We make your spaces spotless with eco-friendly
              solutions.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-4 w-4 text-red-400" />
              <span className="text-sm">Herengracht 123, 1015 BG Amsterdam, Netherlands</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services/apartment-cleaning" className="hover:text-blue-400 transition-colors">
                  Apartment Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/office-cleaning" className="hover:text-blue-400 transition-colors">
                  Office Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/warehouse-cleaning" className="hover:text-blue-400 transition-colors">
                  Warehouse Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/post-renovation" className="hover:text-blue-400 transition-colors">
                  Post-Renovation Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/disinfection" className="hover:text-blue-400 transition-colors">
                  Disinfection Services
                </Link>
              </li>
              <li>
                <Link href="/services/furniture-cleaning" className="hover:text-blue-400 transition-colors">
                  Furniture Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-400" />
                <span>+3120687154</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-400" />
                <span>info@sparkleworkshome.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-red-400" />
                <span>Mon-Fri: 8:00-18:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tips" className="hover:text-blue-400 transition-colors">
                  Cleaning Tips
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-blue-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SparkleWorksHome. All rights reserved. Professional cleaning services in Netherlands.</p>
        </div>
      </div>
    </footer>
  )
}
