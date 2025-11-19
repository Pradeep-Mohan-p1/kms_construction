"use client";

import Hero from "@/components/Hero";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Home Floor Tiles",
    category: "Residential",
    image: "/KMS-services-images/floor_tile.jpeg",
  },
  {
    id: 2,
    title: "Commercial Showroom",
    category: "Commercial",
    image: "/KMS-services-images/tile_dealer.jpeg",
  },
  {
    id: 3,
    title: "Bathroom Wall Tiles",
    category: "Residential",
    image: "/KMS-services-images/wall_tiles.jpeg",
  },
  {
    id: 4,
    title: "Outdoor Parking Area",
    category: "Commercial",
    image: "/KMS-services-images/parking_tiles.jpeg",
  },
  {
    id: 5,
    title: "Kitchen Renovation",
    category: "Residential",
    image: "/KMS-services-images/retiling.jpeg",
  },
  {
    id: 6,
    title: "Office Floor Tiles",
    category: "Commercial",
    image: "/KMS-services-images/waterproof.jpeg",
  },
  {
    id: 7,
    title: "Living Room Tiles",
    category: "Residential",
    image: "/KMS-services-images/floor_tile.jpeg",
  },
  {
    id: 8,
    title: "Retail Store Flooring",
    category: "Commercial",
    image: "/KMS-services-images/tile_dealer.jpeg",
  },
  {
    id: 9,
    title: "Balcony Tiles",
    category: "Residential",
    image: "/KMS-services-images/wall_tiles.jpeg",
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Hero
        title="Our Projects"
        subtitle="Showcasing Our Quality Work"
        showButtons={false}
      />

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
              Project Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Explore our completed projects across residential and commercial
              spaces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all"
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="relative h-[300px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100">
                    <h3 className="text-xl font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-200">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Project"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

