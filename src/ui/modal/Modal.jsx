import React from 'react'
import { motion } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] bg-white/90 backdrop-blur-sm flex items-center justify-center"
    >
      <motion.div
        initial={{ y: 20, scale: 0.9 }}
        animate={{ y: 0, scale: 1 }}
        className="relative p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center bg-white/90 border"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <X size={24} />
        </button>
        <div className="flex items-center justify-center text-green-600 mb-4">
          <CheckCircle size={48} />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">Request Sent!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for your inquiry. We've received your request and will be in touch shortly to confirm details.
        </p>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-2xl px-5 py-3 font-semibold border shadow-sm transition hover:shadow-md"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SuccessModal