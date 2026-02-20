import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { parts } from "@/data/parts";

export async function generateStaticParams() {
  return parts.map((p) => ({ id: p.id }));
}

export default async function PartDetailPage({ params }) {
  const { id } = await params;
  const part = parts.find((p) => p.id === id);

  if (!part) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/inventory" className="text-neutral-400 hover:text-white mb-6 inline-block">
            ← Back to Parts
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-900/50 border border-neutral-800">
              <Image
                src={part.image}
                alt={part.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <span className="inline-block text-xs font-semibold text-neutral-400 bg-neutral-800 px-2 py-1 rounded mb-4">
                {part.brand}
              </span>
              <h1 className="text-2xl font-bold text-white mb-2">{part.name}</h1>
              <p className="text-2xl font-semibold text-white mb-1">₵{part.price.toLocaleString()}</p>
              {part.priceRange && (
                <p className="text-neutral-500 text-sm mb-6">Typical range: {part.priceRange}</p>
              )}

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="flex-1 p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
                    <p className="text-neutral-500 text-sm">Part Number</p>
                    <p className="font-semibold text-white">{part.partNumber}</p>
                  </div>
                  <div className="flex-1 p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
                    <p className="text-neutral-500 text-sm">Category</p>
                    <p className="font-semibold text-white">{part.category}</p>
                  </div>
                </div>
                <div className="p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <p className="text-neutral-500 text-sm mb-1">Availability</p>
                  <p className="font-semibold text-neutral-400">{part.inStock ? "In Stock" : "Out of Stock"}</p>
                </div>
              </div>

              <p className="text-neutral-400 mb-8">{part.description}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact?subject=Part%20Inquiry"
                  className="inline-flex justify-center bg-white hover:bg-neutral-100 text-black font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Inquire About Part
                </Link>
                <a
                  href={`https://wa.me/233244000000?text=Hi, I'm interested in ${encodeURIComponent(part.name)} (${part.partNumber})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-neutral-600 hover:bg-neutral-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
