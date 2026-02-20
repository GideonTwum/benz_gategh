"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { parts } from "@/data/parts";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  const featuredParts = parts.slice(0, 6);

  return (
    <>
      <Header />
      <main>
        {/* Hero - Text left, logos right */}
        <section className="min-h-[85vh] flex items-center pt-24 pb-16 bg-black">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text - Left */}
              <motion.div
                className="text-left order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                  Premium Spare Parts
                  <br />
                  <span className="text-neutral-400">Mercedes-Benz & Range Rover</span>
                </h1>
                <p className="text-xl text-neutral-300 max-w-xl mb-10">
                  Genuine parts only. Your trusted source for Benz and Range Rover spare parts in Accra.
                </p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link
                    href="/inventory"
                    className="inline-flex justify-center bg-white hover:bg-neutral-100 text-black font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
                  >
                    Browse Parts
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex justify-center bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg border-2 border-white/50 transition-colors"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </motion.div>

              {/* Logos - Right */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center items-center order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div
                  className="relative w-72 sm:w-80 aspect-[2/1] shrink-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Image
                    src="/benz-logo.png"
                    alt="Mercedes-Benz"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 288px, 320px"
                    priority
                  />
                </motion.div>
                <motion.div
                  className="relative w-72 sm:w-80 aspect-[2/1] shrink-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Image
                    src="/range-logo.png"
                    alt="Range Rover"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 288px, 320px"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brand Focus */}
        <section className="py-20 bg-black border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="p-8 bg-neutral-900/50 rounded-2xl border border-neutral-800"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-xl bg-neutral-800 flex items-center justify-center mb-6 text-neutral-400">
                  <span className="text-3xl">◇</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Mercedes-Benz Parts</h2>
                <p className="text-neutral-400">
                  Our specialty. We stock genuine and OE Mercedes-Benz spare parts — brakes, filters, engine components, and more. No used parts.
                </p>
              </motion.div>
              <motion.div
                className="p-8 bg-neutral-900/50 rounded-2xl border border-neutral-800"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-16 h-16 rounded-xl bg-neutral-800 flex items-center justify-center mb-6 text-neutral-400">
                  <span className="text-3xl">▭</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Range Rover Parts</h2>
                <p className="text-neutral-400">
                  Quality Range Rover components for Sport, Evoque, Discovery, and more. All genuine or OEM quality.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Parts */}
        <section className="py-20 bg-black border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Featured Parts</h2>
                <p className="text-neutral-400">Popular spare parts in stock</p>
              </div>
              <Link
                href="/inventory"
                className="bg-white hover:bg-neutral-100 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                View All Parts
              </Link>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredParts.map((part, i) => (
                <motion.div
                  key={part.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                <Link
                  href={`/inventory/${part.id}`}
                  className="group overflow-hidden rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-800">
                    <Image
                      src={part.image}
                      alt={part.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 text-neutral-800 text-xs font-semibold px-2 py-1 rounded">
                      {part.brand}
                    </div>
                    <div className="absolute top-3 right-3 bg-white text-black text-sm font-semibold px-3 py-1 rounded-lg">
                      ₵{part.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-white group-hover:text-neutral-300 transition-colors line-clamp-2">
                      {part.name}
                    </h3>
                    <p className="text-neutral-500 text-sm mt-1">{part.category}</p>
                  </div>
                </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* No Used Parts - Trust */}
        <motion.section
          className="py-20 bg-neutral-900/50 border-t border-neutral-800 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Genuine Parts Only</h2>
            <p className="text-neutral-400 text-lg mb-8">
              We do not sell used parts. Every part in our inventory is genuine or OEM quality — so you get reliability and peace of mind.
            </p>
            <Link
              href="/about"
              className="inline-flex justify-center bg-white hover:bg-neutral-100 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Why Choose Benzgate
            </Link>
          </div>
        </motion.section>

        {/* Testimonials */}
        <section className="py-20 bg-black border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Feedback from mechanics and car owners across Accra.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.id}
                  className="p-6 bg-neutral-900/50 rounded-xl border border-neutral-800"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-neutral-400">★</span>
                    ))}
                  </div>
                  <p className="text-neutral-300 italic mb-4">"{t.quote}"</p>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-neutral-500 text-sm">{t.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <motion.section
          className="py-20 bg-black border-t border-neutral-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Part?</h2>
            <p className="text-neutral-400 mb-8">
              Visit us in East Legon or contact us. We&apos;ll help you find the right Benz or Range Rover part.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inventory"
                className="inline-flex justify-center bg-white hover:bg-neutral-100 text-black font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Browse Parts
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center bg-transparent hover:bg-neutral-800 text-white font-semibold px-8 py-4 rounded-lg border border-neutral-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
