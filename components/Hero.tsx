"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  showButtons?: boolean;
}

export default function Hero({ title, subtitle, showButtons = true }: HeroProps) {
  return (
    <div className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/KMS-services-images/floor_tile.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-primary-600/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-primary-100"
          >
            {subtitle}
          </motion.p>
        )}
        {showButtons && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/book"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all flex items-center space-x-2 shadow-xl"
            >
              <span>Book Service</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919876543210"
              className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-400 transition-all flex items-center space-x-2 shadow-xl border-2 border-white"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
}



