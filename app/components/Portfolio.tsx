"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  
  {
    title: "Scrapion",
    category: "Scrap Collection & Recycling Management System",
    image: "/images/Scrapion.png",
  },
  {
    title: "FlexLife",
    category: "Apartment Rental Platform",
    image: "/images/FlexLife.png",
  },
  
  {
    title: "Fiasite",
    category: "Field Sales Management System",
    image: "/images/Fiasite.png",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-32 px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        
        
        <div className="text-center mb-24">
          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-4xl font-bold">
            Featured Projects
          </h2>
        </div>

        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.01 }}
              className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl"
            >
             
              <div className="relative overflow-hidden">
                <Image
  src={project.image}
  alt={project.title}
  width={1400}
  height={900}
  className="w-full h-auto object-contain"
/>

                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              </div>

              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex justify-between items-end">
                <div>
                  <p className="text-cyan-400 text-sm md:text-base mb-3 uppercase tracking-[3px]">
                    {project.category}
                  </p>

                  <h3 className="text-3xl md:text-5xl font-bold">
                    {project.title}
                  </h3>
                </div>

                <div className="hidden md:flex w-16 h-16 rounded-full bg-white text-black items-center justify-center group-hover:rotate-45 transition duration-500">
                  <ArrowUpRight size={28} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}