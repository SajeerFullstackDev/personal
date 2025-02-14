"use client";
import { Vortex } from "@/components/ui/vortex";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce platform with payment integration.",
    image: "https://source.unsplash.com/400x300/?ecommerce",
  },
  // {
  //   id: 2,
  //   title: "Portfolio Website",
  //   description: "A personal portfolio showcasing skills and projects.",
  //   image: "https://source.unsplash.com/400x300/?portfolio",
  // },
  {
    id: 3,
    title: "Social Media App",
    description: "A social networking app with real-time chat features.",
    image: "https://source.unsplash.com/400x300/?socialmedia",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blogging website with rich text editor and comments section.",
    image: "https://source.unsplash.com/400x300/?blog",
  },
  // {
  //   id: 5,
  //   title: "Task Management Tool",
  //   description: "A web application to manage and track daily tasks.",
  //   image: "https://source.unsplash.com/400x300/?taskmanagement",
  // },
  // {
  //   id: 6,
  //   title: "Weather Forecast App",
  //   description: "A real-time weather forecasting app using API integration.",
  //   image: "https://source.unsplash.com/400x300/?weather",
  // },
];

export default function PortfolioPage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center overflow-hidden relative px-4">
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
          My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent text-lg md:text-2xl max-w-2xl mt-6 text-center"
        >
          A showcase of my best work and projects.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 p-6 w-full max-w-6xl"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
              className="bg-white/10 rounded-lg p-6 text-white shadow-lg hover:scale-105 transition transform relative overflow-hidden"
            >
              {/* <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md" /> */}
              <div className="mt-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
                {/* <button
                  className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 transition duration-200 rounded-lg text-white"
                  onClick={() => router.push(`/project/${project.id}`)}
                >
                  View Details
                </button> */}
              </div>
            </motion.div>
          ))}
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
