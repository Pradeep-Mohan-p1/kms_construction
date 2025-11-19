"use client";

import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { Award, Clock, Users } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality Material",
    description:
      "We use only the finest quality tiles and materials, ensuring durability and aesthetic appeal.",
  },
  {
    icon: Users,
    title: "Skilled Work",
    description:
      "Our experienced team of craftsmen brings 15+ years of expertise to every project.",
  },
  {
    icon: Clock,
    title: "On-time Delivery",
    description:
      "We respect your time and commit to completing projects within agreed timelines.",
  },
];

export default function AboutPageContent() {
  return (
    <>
      <Hero
        title="About KMS Construction"
        subtitle="15+ Years of Excellence in Tile Laying"
        showButtons={false}
      />

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  KMS Construction has been a trusted name in Namakkal for over
                  15 years, specializing in floor and wall tile laying. What
                  started as a small local business has grown into one of the
                  leading tile dealers and installation specialists in the
                  region.
                </p>
                <p>
                  Our journey began with a simple mission: to provide quality
                  tile work that stands the test of time. Over the years, we
                  have completed hundreds of residential and commercial
                  projects, earning the trust and satisfaction of our clients
                  through consistent quality, skilled craftsmanship, and
                  reliable service.
                </p>
                <p>
                  Today, KMS Construction is recognized as a premier tile
                  dealer in Namakkal, offering not just installation services
                  but also a wide range of high-quality tiles for wholesale and
                  retail customers. Our commitment to excellence remains
                  unchanged, and we continue to set new standards in the tile
                  laying industry.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/KMS-services-images/tile_dealer.jpeg')",
                }}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To provide exceptional tile laying services and quality materials
              that transform spaces while maintaining the highest standards of
              craftsmanship, reliability, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Team at Work
            </h2>
            <p className="text-xl text-gray-600">
              Skilled professionals dedicated to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[300px] rounded-xl overflow-hidden shadow-xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/KMS-services-images/wall_tiles.jpeg')",
                }}
              ></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[300px] rounded-xl overflow-hidden shadow-xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/KMS-services-images/retiling.jpeg')",
                }}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

