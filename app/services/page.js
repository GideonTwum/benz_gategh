import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

const serviceIcons = {
  car: "🚗",
  wrench: "🔧",
  cog: "⚙️",
  search: "🔍",
  paint: "🎨",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-64 lg:h-80 bg-slate-900 pt-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&q=80"
              alt="Auto repair and service"
              fill
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8">
            <h1 className="text-4xl font-bold text-white">Our Services</h1>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Beyond car sales, we offer a full range of automotive services to keep you on the road with confidence.
              </p>
            </div>
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-xl bg-amber-500/10 flex items-center justify-center text-3xl mb-6">
                      {serviceIcons[service.icon] || "🚗"}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
                  </div>
                  <div className={`relative aspect-video rounded-xl overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <Image
                      src={[
                        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
                        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3",
                        "https://images.unsplash.com/photo-1609521263047-f8f205293f24",
                        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc",
                        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
                      ][index % 5] + "?w=800&q=80"}
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
        <section className="py-16 bg-amber-500">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Need Our Services?</h2>
            <p className="text-slate-800 mb-6">Get in touch to schedule a repair, request a quote, or visit our showroom.</p>
            <Link
              href="/contact"
              className="inline-flex justify-center bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
