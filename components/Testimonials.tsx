"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Namakkal",
    rating: 5,
    text: "KMS Construction did an excellent job with our floor tiles. The work was completed on time and the quality is outstanding. Highly recommended!",
  },
  {
    id: 2,
    name: "Priya Suresh",
    location: "Namakkal",
    rating: 5,
    text: "Professional team, great materials, and beautiful finish. Our new wall tiles look amazing. Thank you KMS Construction!",
  },
  {
    id: 3,
    name: "Mohan Reddy",
    location: "Namakkal",
    rating: 5,
    text: "Best tile dealers in Namakkal! They helped us choose the perfect tiles and installed them perfectly. Very satisfied with the service.",
  },
  {
    id: 4,
    name: "Lakshmi Devi",
    location: "Namakkal",
    rating: 5,
    text: "15+ years of experience really shows. The team is skilled, punctual, and the results speak for themselves. Great value for money!",
  },
  {
    id: 5,
    name: "Suresh Babu",
    location: "Namakkal",
    rating: 5,
    text: "We renovated our entire home with KMS Construction. From floor to wall tiles, everything was done perfectly. Excellent service!",
  },
];

export default function Testimonials() {
  return (
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by 500+ homeowners and 100+ commercial clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



