import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { vehicles } from "@/data/vehicles";
import { testimonials } from "@/data/testimonials";
import { services } from "@/data/services";

export default function Home() {
  const featuredVehicles = vehicles.slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
              alt="Premium cars at Benzgate Ghana"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Premium Cars & Reliable
              <br />
              <span className="text-amber-400">Auto Services</span> in Accra
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Your trusted automotive partner for vehicle sales and quality repairs. Experience excellence on every kilometer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inventory"
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8 py-4 rounded-md transition-colors"
              >
                View Inventory
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-md border border-white/30 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What We Offer</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                From premium vehicle sales to expert repairs, Benzgate is your one-stop automotive solution.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service) => (
                <Link
                  key={service.id}
                  href="/services"
                  className="group p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
                >
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{service.description}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/services" className="text-amber-500 hover:text-amber-400 font-semibold">
                View All Services →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Inventory */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Featured Vehicles</h2>
                <p className="text-slate-600 dark:text-slate-400">Handpicked premium cars ready for you</p>
              </div>
              <Link
                href="/inventory"
                className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-6 py-3 rounded-md transition-colors"
              >
                View All Inventory
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredVehicles.map((vehicle) => (
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
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                      {vehicle.brand} {vehicle.model}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">{vehicle.year} • {vehicle.mileage}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Real feedback from satisfied customers across Accra and beyond.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="p-6 bg-slate-800/50 rounded-xl border border-slate-700"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-amber-400">★</span>
                    ))}
                  </div>
                  <p className="text-slate-300 italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-amber-500">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Find Your Perfect Car?</h2>
            <p className="text-slate-800 mb-8">
              Visit our showroom in East Legon or get in touch. Our team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inventory"
                className="inline-flex justify-center bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-md transition-colors"
              >
                Browse Inventory
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center bg-white hover:bg-slate-100 text-slate-900 font-semibold px-8 py-4 rounded-md transition-colors"
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
