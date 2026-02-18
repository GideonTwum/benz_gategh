import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { vehicles } from "@/data/vehicles";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", alt: "Showroom" },
  { src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80", alt: "Premium vehicles" },
  { src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", alt: "Auto service" },
  { src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", alt: "Mercedes-Benz" },
  { src: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80", alt: "SUV" },
  { src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80", alt: "BMW" },
  { src: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&q=80", alt: "Lexus" },
  { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80", alt: "Interior" },
  { src: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80", alt: "Car detail" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Gallery</h1>
            <p className="text-slate-600 dark:text-slate-400">
              A look at our vehicles, showroom, and service facilities.
            </p>
          </div>

          {/* Vehicle showcase */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Featured Vehicles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.slice(0, 6).map((v) => (
                <div key={v.id} className="group relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={v.image}
                    alt={`${v.brand} ${v.model}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-4">
                    <p className="text-white font-semibold">
                      {v.brand} {v.model} ({v.year})
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* General gallery */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Showroom & Service</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
