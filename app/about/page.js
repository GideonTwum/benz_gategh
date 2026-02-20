import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const whyChoose = [
    {
      title: "Genuine Parts Only",
      description: "We do not sell used parts. Every item is genuine or OEM quality — reliability you can trust.",
      icon: "✓",
    },
    {
      title: "Benz Specialists",
      description: "Mercedes-Benz is our core focus. We know the parts, the models, and what fits.",
      icon: "◇",
    },
    {
      title: "Range Rover Too",
      description: "We also stock and source Range Rover parts for Sport, Evoque, Discovery, and more.",
      icon: "▭",
    },
    {
      title: "Trusted in Accra",
      description: "Mechanics and car owners rely on us for quality parts and honest service.",
      icon: "★",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-64 lg:h-80 bg-black pt-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&q=80"
              alt="Auto parts"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8">
            <h1 className="text-4xl font-bold text-white">About Us</h1>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-neutral-400 mb-4">
                  Benzgate Ghana is a trusted spare parts supplier based in Accra, specializing in Mercedes-Benz and Range Rover parts. We focus on what we do best: genuine, quality automotive parts — no used parts, no compromise.
                </p>
                <p className="text-neutral-400">
                  From our location in East Legon, we serve mechanics, workshops, and car owners across Accra and Ghana. Whether you need brake pads, filters, suspension parts, or engine components — we supply the real thing.
                </p>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-neutral-800">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Spare parts"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 bg-black border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Benzgate?</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                We are committed to quality and integrity in every part we supply.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChoose.map((item) => (
                <div
                  key={item.title}
                  className="text-center p-6 bg-neutral-900/50 rounded-xl border border-neutral-800"
                >
                  <div className="text-3xl mb-4 text-neutral-400">{item.icon}</div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-neutral-900/50 border-t border-neutral-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Parts?</h2>
            <p className="text-neutral-400 mb-6">Visit our showroom or get in touch for inquiries.</p>
            <Link
              href="/contact"
              className="inline-flex justify-center bg-white hover:bg-neutral-100 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
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
