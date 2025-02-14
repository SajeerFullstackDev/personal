"use client";
import { Vortex } from "@/components/ui/vortex";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import React from "react";

export default function VortexPortfolio() {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center overflow-hidden relative">
      <Vortex
        backgroundColor="black"
        className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-10 py-6 w-full h-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-5xl md:text-8xl font-extrabold text-center drop-shadow-lg"
        >
          Welcome to My World
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent text-lg md:text-2xl max-w-2xl mt-6 text-center"
        >
          Creative Developer | UI/UX Enthusiast | Tech Explorer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-6 mt-8"
        >
          <button
            className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-pink-600 hover:to-purple-600 transition duration-200 rounded-lg text-white shadow-md text-lg font-semibold"
            onClick={() => router.push("/portfolio")}
          >
            View Projects
          </button>
          <button
             className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition duration-200 rounded-lg text-lg font-semibold"
            onClick={() => router.push("/contact")}
          >
            Contact Me
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex items-center gap-6 mt-8"
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400 transition">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400 transition">
            <FaInstagram />
          </a>
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400 transition">
            <FaWhatsapp />
          </a>
        </motion.div>
      </Vortex>
    </div>
  );
}
