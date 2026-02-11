import React from 'react'
import { motion } from "framer-motion";


const ReviewCard = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.025, transition: { duration: 0.1 } }}
    className="rounded-2xl shadow-lg border p-6 transition-all duration-300 transform"
  >
    {children}
  </motion.div>
);

export default ReviewCard