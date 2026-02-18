import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const whyChoose = [
    {
      title: "Years of Experience",
      description: "Deep expertise in the automotive industry with a proven track record of satisfied customers.",
      icon: "📋",
    },
    {
      title: "Trusted Reputation",
      description: "Built on transparency, quality, and customer-first service. We stand behind every vehicle and repair.",
      icon: "⭐",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous inspection and sourcing standards ensure you get vehicles you can rely on.",
      icon: "✓",
    },
    {
      title: "Full Documentation",
      description: "Complete paperwork and clear titles. No surprises when you drive away.",
      icon: "📄",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-64 lg:h-80 bg-slate-900 pt-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80"
              alt="Benzgate showroom"
              fill
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8">
            <h1 className="text-4xl font-bold text-white">About Us</h1>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Our Story</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Benzgate Ghana is a trusted automotive dealership and service provider based in Accra, specializing in premium vehicles and quality repairs. Founded with a passion for automobiles and a commitment to integrity, we have grown to become a preferred destination for car buyers and owners seeking reliable service.
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  From our showroom in East Legon, we serve customers across Accra, Ghana, and beyond. Whether you&apos;re looking for a luxury sedan, a rugged SUV, or expert repair and maintenance, Benzgate delivers with professionalism and care.
                </p>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80"
                  alt="Premium vehicles at Benzgate"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  To provide exceptional automotive solutions that exceed expectations. We aim to make premium vehicles and reliable repairs accessible to our customers while building lasting relationships based on trust and quality.
                </p>
              </div>
              <div className="p-8 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  To be the most trusted name in automotive sales and service in Ghana and the wider region. We envision a future where every customer drives with confidence, knowing they have a partner they can depend on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Benzgate */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Benzgate?</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                We go the extra mile so you can drive with peace of mind.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChoose.map((item) => (
                <div
                  key={item.title}
                  className="text-center p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-amber-500/50 transition-colors"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-slate-400 mb-6">Visit our showroom or get in touch today.</p>
            <Link
              href="/contact"
              className="inline-flex justify-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-md transition-colors"
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
