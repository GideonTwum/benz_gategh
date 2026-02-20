"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { parts, categories } from "@/data/parts";

const brands = ["All", "Mercedes-Benz", "Range Rover"];

export default function InventoryPage() {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredParts = useMemo(() => {
    return parts.filter((part) => {
      const matchesBrand = selectedBrand === "All" || part.brand === selectedBrand;
      const matchesCategory = selectedCategory === "All" || part.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        part.partNumber.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesBrand && matchesCategory && matchesSearch;
    });
  }, [selectedBrand, selectedCategory, searchQuery]);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">Spare Parts Inventory</h1>
            <p className="text-neutral-400">
              Genuine Mercedes-Benz and Range Rover parts. Filter by brand, category, or search.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-10 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
            <input
              type="text"
              placeholder="Search parts or part number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2.5 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 flex-1 min-w-0 focus:ring-2 focus:ring-neutral-600 focus:border-neutral-600"
            />
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-4 py-2.5 rounded-lg border border-neutral-700 bg-neutral-800 text-white"
            >
              {brands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2.5 rounded-lg border border-neutral-700 bg-neutral-800 text-white"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <p className="text-neutral-500 mb-6">
            {filteredParts.length} part{filteredParts.length !== 1 ? "s" : ""} found
          </p>

          {filteredParts.length === 0 ? (
            <div className="text-center py-20 bg-neutral-900/50 rounded-xl border border-neutral-800">
              <p className="text-neutral-400 mb-4">No parts match your filters.</p>
              <button
                onClick={() => {
                  setSelectedBrand("All");
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-neutral-300 hover:text-white font-semibold underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredParts.map((part) => (
                <Link
                  key={part.id}
                  href={`/inventory/${part.id}`}
                  className="group overflow-hidden rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all"
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
                    <p className="text-neutral-500 text-sm mt-1">{part.category} • {part.partNumber}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
