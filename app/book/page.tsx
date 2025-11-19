"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";

// Note: Metadata cannot be exported from client components
// For SEO, consider making this a server component or adding metadata in layout

const serviceTypes = [
  "Floor Tile Laying",
  "Wall Tile Laying",
  "Outdoor / Parking Tiles",
  "Tile Wholesale & Retail",
  "Renovation & Re-tiling",
  "Waterproofing",
];

export default function Book() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    serviceType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateWhatsAppMessage = () => {
    const message = `Hello KMS Construction,

I'm interested in booking a service:

Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location}
Service Type: ${formData.serviceType}
Message: ${formData.message}

Please contact me at your earliest convenience.`;

    return encodeURIComponent(message);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Submit to API
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");

        // Open WhatsApp with pre-filled message
        const phoneNumber = "919876543210";
        const message = generateWhatsAppMessage();
        window.open(
          `https://wa.me/${phoneNumber}?text=${message}`,
          "_blank",
          "noopener,noreferrer"
        );

        // Reset form
        setFormData({
          name: "",
          phone: "",
          location: "",
          serviceType: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="pt-20 pb-12 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Book a Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-100"
          >
            Fill out the form below and we'll get back to you soon
          </motion.p>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your location"
                />
              </div>

              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Select a service</option>
                  {serviceTypes.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg flex items-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  <p>
                    Thank you! Your booking request has been submitted. We'll
                    contact you soon.
                  </p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg flex items-center space-x-2"
                >
                  <AlertCircle className="w-5 h-5" />
                  <p>
                    There was an error submitting your request. Please try again
                    or contact us directly.
                  </p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}

