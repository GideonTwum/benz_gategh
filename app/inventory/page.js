"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { vehicles } from "@/data/vehicles";

const brands = ["All", ...new Set(vehicles.map((v) => v.brand))];
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $50k", min: 0, max: 50000 },
  { label: "$50k - $100k", min: 50000, max: 100000 },
  { label: "$100k - $150k", min: 100000, max: 150000 },
  { label: "Over $150k", min: 150000, max: Infinity },
];

export default function InventoryPage() {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState(priceRanges[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const matchesBrand = selectedBrand === "All" || vehicle.brand === selectedBrand;
      const matchesPrice = vehicle.price >= selectedPrice.min && vehicle.price < selectedPrice.max;
      const matchesSearch =
        searchQuery === "" ||
        `${vehicle.brand} ${vehicle.model}`.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesBrand && matchesPrice && matchesSearch;
    });
  }, [selectedBrand, selectedPrice, searchQuery]);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Our Inventory</h1>
            <p className="text-slate-600 dark:text-slate-400">
              Premium vehicles ready for you. Filter by brand, price, or search for your perfect match.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-10 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            <input
              type="text"
              placeholder="Search by brand or model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white flex-1 min-w-0"
            />
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              {brands.map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
            <select
              value={priceRanges.indexOf(selectedPrice)}
              onChange={(e) => setSelectedPrice(priceRanges[parseInt(e.target.value)])}
              className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              {priceRanges.map((range, i) => (
                <option key={range.label} value={i}>{range.label}</option>
              ))}
            </select>
          </div>

          {/* Results */}
          <p className="text-slate-500 mb-6">
            {filteredVehicles.length} vehicle{filteredVehicles.length !== 1 ? "s" : ""} found
          </p>

          {filteredVehicles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500 mb-4">No vehicles match your filters.</p>
              <button
                onClick={() => {
                  setSelectedBrand("All");
                  setSelectedPrice(priceRanges[0]);
                  setSearchQuery("");
                }}
                className="text-amber-500 hover:text-amber-400 font-semibold"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map((vehicle) => (
                <Link
                  key={vehicle.id}
                  href={`/inventory/${vehicle.id}`}
                  className="group overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.brand} ${vehicle.model}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-slate-900 text-sm font-semibold px-3 py-1 rounded">
                      ${vehicle.price.toLocaleString()}
                    </div>
                    <div className="absolute top-4 right-4 bg-slate-900/70 text-white text-xs px-2 py-1 rounded">
                      {vehicle.year}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                      {vehicle.brand} {vehicle.model}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2 text-sm text-slate-500">
                      <span>{vehicle.mileage}</span>
                      <span>•</span>
                      <span>{vehicle.fuel}</span>
                      <span>•</span>
                      <span>{vehicle.transmission}</span>
                    </div>
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
