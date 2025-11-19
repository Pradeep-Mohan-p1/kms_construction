"use client";

import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home as HomeIcon,
  Building2,
  Wrench,
  ShoppingCart,
  RefreshCw,
  Droplets,
} from "lucide-react";

const services = [
  {
    icon: HomeIcon,
    title: "Floor Tile Laying",
    description: "Expert installation of floor tiles for homes and commercial spaces.",
  },
  {
    icon: Building2,
    title: "Wall Tile Laying",
    description: "Professional wall tile installation with precision and care.",
  },
  {
    icon: Wrench,
    title: "Outdoor / Parking Tiles",
    description: "Durable outdoor and parking area tile solutions.",
  },
  {
    icon: ShoppingCart,
    title: "Tile Wholesale & Retail",
    description: "Leading tile dealers in Namakkal with wide variety.",
  },
  {
    icon: RefreshCw,
    title: "Renovation & Re-tiling",
    description: "Complete renovation and re-tiling services.",
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    description: "Tile-related waterproofing solutions for long-lasting results.",
  },
];

const stats = [
  { number: "15+", label: "Years of Experience" },
  { number: "500+", label: "Homes Completed" },
  { number: "100+", label: "Commercial Projects" },
];

export default function Home() {
  return (
    <>
      <Hero title="15 Years of Trusted Tile Laying Excellence in Namakkal" />

      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-xl text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tile solutions for all your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}

