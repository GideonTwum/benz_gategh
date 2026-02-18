import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";

function ContactFallback() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="h-10 w-64 bg-slate-200 dark:bg-slate-700 rounded animate-pulse mb-2" />
        <div className="h-5 w-96 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
      </div>
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="h-64 bg-slate-200 dark:bg-slate-700 rounded-xl animate-pulse" />
        <div className="h-96 bg-slate-200 dark:bg-slate-700 rounded-xl animate-pulse" />
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <Suspense fallback={<ContactFallback />}>
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
