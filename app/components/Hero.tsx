"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-pink-500/20" />

      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <p className="uppercase tracking-[6px] text-cyan-400 mb-4">
          Creative Design Agency
        </p>

        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight max-w-5xl">
          We Create
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {" "}Digital Experiences
          </span>
        </h1>

        <p className="mt-8 text-gray-300 max-w-2xl mx-auto text-lg">
          We build visually stunning websites, modern brands,
          and premium digital products that help businesses grow.
        </p>

        <div className="mt-10 flex gap-6 justify-center flex-wrap">
          <button className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 transition flex items-center gap-2 cursor-pointer">
            Get Started
            <ArrowRight size={18} />
          </button>

          <button className="px-6 py-2.5 rounded-full border border-white/20 hover:bg-white/10 transition">
            View Work
          </button>
        </div>
      </motion.div>
    </section>
  );
}