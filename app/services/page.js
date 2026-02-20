import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

const serviceIcons = {
  parts: "📦",
  order: "🔍",
  expert: "👤",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-64 lg:h-80 bg-black pt-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
              alt="Spare parts"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8">
            <h1 className="text-4xl font-bold text-white">Our Services</h1>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-neutral-400 max-w-2xl mx-auto">
                We supply genuine Mercedes-Benz and Range Rover spare parts. Here&apos;s how we help.
              </p>
            </div>
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-xl bg-neutral-800 flex items-center justify-center text-3xl mb-6">
                      {serviceIcons[service.icon] || "📦"}
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-neutral-400 leading-relaxed">{service.description}</p>
                  </div>
                  <div className={`relative aspect-video rounded-xl overflow-hidden border border-neutral-800 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <Image
                      src={[
                        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
                        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc",
                        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3",
                      ][index % 3] + "?w=800&q=80"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-black border-t border-neutral-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Looking for a Part?</h2>
            <p className="text-neutral-400 mb-6">Browse our inventory or contact us for sourcing inquiries.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inventory"
                className="inline-flex justify-center bg-white hover:bg-neutral-100 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Browse Parts
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center bg-transparent hover:bg-neutral-800 text-white font-semibold px-8 py-3 rounded-lg border border-neutral-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
