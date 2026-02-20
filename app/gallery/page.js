import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { parts } from "@/data/parts";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Auto parts" },
  { src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", alt: "Parts workshop" },
  { src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80", alt: "Engine components" },
  { src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80", alt: "Premium parts" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-white mb-2">Gallery</h1>
            <p className="text-neutral-400">
              A look at our parts and what we offer — genuine Benz and Range Rover components.
            </p>
          </div>

          {/* Parts showcase */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold text-white mb-6">Parts Showcase</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {parts.slice(0, 8).map((p) => (
                <div key={p.id} className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-900/50 border border-neutral-800">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent flex items-end p-4">
                    <div>
                      <p className="text-white font-semibold text-sm">{p.name}</p>
                      <p className="text-neutral-200 text-xs">{p.brand}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* General gallery */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-6">Our Space</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-neutral-800">
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
