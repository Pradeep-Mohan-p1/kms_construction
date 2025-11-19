import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">KMS Construction</h3>
            <p className="text-gray-300 mb-4">
              15+ years of trusted tile laying excellence in Namakkal. Leading
              tile dealers and specialists in floor & wall tile laying.
            </p>
            <div className="flex items-start space-x-2 text-gray-300">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <p>Lathuvadi, Namakkal, Tamil Nadu, India</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-5 h-5" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-primary-400 transition-colors"
                >
                  +91 9790055908
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:info@kmsconstruction.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  pradeepmohan1205@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} KMS Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}



