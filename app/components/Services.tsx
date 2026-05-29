"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Code,
  Megaphone,
  Monitor,
} from "lucide-react";

const services = [
  {
    icon: <Palette size={40} />,
    title: "UI/UX Design",
    desc: "Beautiful and intuitive user experiences."
  },
  {
    icon: <Code size={40} />,
    title: "Web Development",
    desc: "Modern scalable websites and apps."
  },
  {
    icon: <Monitor size={40} />,
    title: "Brand Identity",
    desc: "Powerful branding that stands out."
  },
  {
    icon: <Megaphone size={40} />,
    title: "Marketing",
    desc: "Digital strategies for business growth."
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 px-6 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-20">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-cyan-400 transition duration-300"
            >
              <div className="text-cyan-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}