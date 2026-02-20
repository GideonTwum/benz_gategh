"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const subject = searchParams.get("subject");
    if (subject) {
      setFormState((prev) => ({ ...prev, subject: decodeURIComponent(subject) }));
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white mb-2">Contact Us</h1>
        <p className="text-neutral-400">
          Get in touch for vehicle inquiries, service bookings, or to visit our showroom.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-white mb-2">Address</h3>
              <p className="text-neutral-400">
                East Legon, Accra
                <br />
                Ghana
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+233244000000" className="text-neutral-300 hover:text-white">
                +233 24 400 0000
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <a href="mailto:info@benzgategh.com" className="text-neutral-300 hover:text-white">
                info@benzgategh.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/233244000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 rounded-xl overflow-hidden h-64 bg-neutral-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3991947200287!2d-0.166723924!3d5.6342444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0x6e32b0e39f4ab5e9!2sEast%20Legon%2C%20Accra!5e0!3m2!1sen!2sgh!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Benzgate Ghana location - East Legon, Accra"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="bg-neutral-900/50 rounded-xl border border-neutral-800 p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>

            {submitted ? (
              <div className="py-12 text-center">
                <p className="text-neutral-400 font-semibold mb-2">Thank you for your message!</p>
                <p className="text-neutral-400 text-sm">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500"
                  >
                    <option value="">Select...</option>
                    <option value="Parts Inquiry">Parts Inquiry</option>
                    <option value="Quote Request">Quote / Price Request</option>
                    <option value="Order Parts">Order Parts</option>
                    <option value="Source Part">Source Specific Part</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-neutral-100 text-black font-semibold py-4 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
