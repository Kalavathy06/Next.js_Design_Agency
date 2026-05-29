"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let newErrors: any = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    if (form.message.length < 10) {
      newErrors.message =
        "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: any) => {
  e.preventDefault();

  if (validate()) {
    try {
      await emailjs.send(
  "service_yt6s988",
  "template_y4mxs5d",
  {
    name: form.name,
    email: form.email,
    message: form.message,
  },
  "FovSfanCr8nSFuxST"
);

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 3000);

    } catch (error) {
      console.log(error);
      alert("Failed to send message");
    }
  }
};
  return (
    <section
  id="contact"
  className="relative pt-[-100px] pb-40 px-4 md:px-6 bg-black overflow-visible"
>
      
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Contact Us
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Reach out to us, and our team will get back to you promptly.
          </p>
        </motion.div>

        
        <motion.form
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[30px] p-6 md:p-12 w-full overflow-hidden"
        >
          
          <div className="flex items-center justify-center gap-3 text-cyan-400 mb-10">
            <Mail size={20} />
            <p className="text-sm md:text-base">
              kaviyakalavathy@gmail.com
            </p>
          </div>

          
<div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
  <label className="text-base md:text-lg font-medium md:w-[120px]">
    Name
  </label>

  <div className="flex-1">
    <input
      type="text"
      placeholder="Your Name"
      value={form.name}
      onChange={(e) =>
        setForm({
          ...form,
          name: e.target.value,
        })
      }
      className="w-full p-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 transition"
    />

    {errors.name && (
      <p className="text-red-400 mt-2 text-sm">
        {errors.name}
      </p>
    )}
  </div>
</div>

          
<div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
  <label className="text-base md:text-lg font-medium md:w-[120px]">
    Email
  </label>

  <div className="flex-1">
    <input
      type="email"
      placeholder="you@example.com"
      value={form.email}
      onChange={(e) =>
        setForm({
          ...form,
          email: e.target.value,
        })
      }
      className="w-full p-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 transition"
    />

    {errors.email && (
      <p className="text-red-400 mt-2 text-sm">
        {errors.email}
      </p>
    )}
  </div>
</div>

          
          <div className="flex flex-col md:flex-row md:items-start gap-4 mb-8">
            <label className="text-base md:text-lg font-medium md:w-[120px]">
              Message
            </label>

            <div className="flex-1 w-full">
              <textarea
                rows={4}
                placeholder="Write your message here..."
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                className="w-full p-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 transition resize-none md:min-h-[150px]"
              />

              {errors.message && (
                <p className="text-red-400 mt-2 text-sm">
                  {errors.message}
                </p>
              )}
            </div>
          </div>

       
          <button
            type="submit"
            className="w-full py-3 cursor-pointer rounded-2xl bg-white text-black font-semibold text-lg hover:scale-[1.02] transition duration-300 flex items-center justify-center gap-3"
          >
            Send Message
            <ArrowRight size={20} />
          </button>

          {success && (
            <p className="text-green-400 text-center mt-6">
              Message sent successfully!
            </p>
          )}
        </motion.form>
         
      </div>
    </section>
  );
}