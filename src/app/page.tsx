'use client';

import Hero from "@/components/home/Hero";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import ReferralHighlight from "@/components/home/ReferralHighlight";
import NewArrivals from "@/components/home/NewArrivals";
import Categories from "@/components/home/Categories";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      
      {/* Featured Section with Background */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <FeaturedBooks />
        </div>
      </section>

      {/* Referral Section with Contrast */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <ReferralHighlight />
        </div>
      </section>

      {/* New Arrivals with Pattern Background */}
      <section className="bg-[url('/pattern.svg')] bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <NewArrivals />
        </div>
      </section>

      {/* Categories with Gradient */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <Categories />
        </div>
      </section>

      {/* How It Works with Clean Background */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <HowItWorks />
        </div>
      </section>

      {/* Testimonials with Subtle Pattern */}
      <section className="bg-[url('/pattern.svg')] bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <Testimonials />
        </div>
      </section>
    </>
  );
}
