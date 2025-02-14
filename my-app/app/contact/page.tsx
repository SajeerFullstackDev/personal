"use client";
import { Vortex } from "@/components/ui/vortex";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ContactPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=sajeerk000@gmail.com&su=Contact from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;
    
    window.open(gmailLink, "_blank");
  };
  

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center overflow-hidden relative">
      <Vortex
        backgroundColor="black"
        className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-16 py-8 w-full h-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-4xl md:text-7xl font-bold text-center"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent text-md md:text-2xl max-w-2xl mt-6 text-center"
        >
          Have a project in mind or just want to say hi? Let&apos;s connect!
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 flex flex-col gap-4 w-full max-w-lg bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-transparent border-b border-gray-300 focus:outline-none text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-transparent border-b border-gray-300 focus:outline-none text-white placeholder-gray-400"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 bg-transparent border-b border-gray-300 focus:outline-none text-white placeholder-gray-400"
          />
          <button
            onClick={handleSendEmail}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white mt-4"
          >
            Send Message
          </button>
        </motion.div>
        <button
          className="mt-6 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition duration-200 rounded-lg"
          onClick={() => router.push("/")}
        >
          Back to Home
        </button>
      </Vortex>
    </div>
  );
}