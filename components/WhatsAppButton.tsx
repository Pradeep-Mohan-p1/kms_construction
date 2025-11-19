"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
  const message = encodeURIComponent(
    "Hello! I'm interested in your tile laying services. Please provide more information."
  );

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:bg-[#20BA5A] transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.button>
  );
}



