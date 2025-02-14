"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black  text-white py-6 flex flex-col items-center justify-center">
    
      <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} SAJEER.K. All Rights Reserved.</p>
    </footer>
  );
}
