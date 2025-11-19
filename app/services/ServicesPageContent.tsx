"use client";

import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Building2,
  Wrench,
  ShoppingCart,
  RefreshCw,
  Droplets,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Floor Tile Laying",
    description:
      "Expert installation of floor tiles for homes and commercial spaces. We ensure perfect alignment, proper grouting, and long-lasting results.",
    image: "/KMS-services-images/floor_tile.jpeg",
    features: [
      "Professional measurement and planning",
      "High-quality tile materials",
      "Precise cutting and installation",
      "Proper sealing and finishing",
      "Clean-up after completion",
    ],
  },
  {
    icon: Building2,
    title: "Wall Tile Laying",
    description:
      "Professional wall tile installation with precision and care. Transform your walls with beautiful, durable tiles.",
    image: "/KMS-services-images/wall_tiles.jpeg",
    features: [
      "Expert design consultation",
      "Waterproof wall preparation",
      "Perfect alignment and spacing",
      "Professional grouting",
      "Quality assurance",
    ],
  },
  {
    icon: Wrench,
    title: "Outdoor / Parking Tiles",
    description:
      "Durable outdoor and parking area tile solutions designed to withstand weather and heavy traffic.",
    image: "/KMS-services-images/parking_tiles.jpeg",
    features: [
      "Weather-resistant materials",
      "Anti-slip surface options",
      "Heavy-duty installation",
      "Drainage considerations",
      "Long-term durability",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Tile Wholesale & Retail",
    description:
      "Leading tile dealers in Namakkal with a wide variety of premium tiles for every need and budget.",
    image: "/KMS-services-images/tile_dealer.jpeg",
    features: [
      "Extensive tile collection",
      "Competitive pricing",
      "Wholesale and retail options",
      "Expert guidance in selection",
      "Quality guarantee",
    ],
  },
  {
    icon: RefreshCw,
    title: "Renovation & Re-tiling",
    description:
      "Complete renovation and re-tiling services to give your space a fresh, modern look.",
    image: "/KMS-services-images/retiling.jpeg",
    features: [
      "Old tile removal",
      "Surface preparation",
      "New tile installation",
      "Complete renovation solutions",
      "Minimal disruption",
    ],
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    description:
      "Tile-related waterproofing solutions for bathrooms, kitchens, and wet areas to ensure long-lasting results.",
    image: "/KMS-services-images/waterproof.jpeg",
    features: [
      "Bathroom waterproofing",
      "Kitchen area protection",
      "Balcony waterproofing",
      "Terrace solutions",
      "Warranty on work",
    ],
  },
];

export default function ServicesPageContent() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive Tile Solutions for Every Need"
        showButtons={false}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-2" : ""
                  } space-y-4`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700">{service.description}</p>
                  <ul className="space-y-2 mt-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-1" : ""
                  } relative h-[400px] rounded-xl overflow-hidden shadow-xl`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${service.image}')`,
                    }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              href="/book"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
            >
              Book a Service Now
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}




