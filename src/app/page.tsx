'use client';

import MiniCartPreview from "@/components/home/MiniCartPreview";
import Hero from "@/components/home/Hero";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import ReferralHighlight from "@/components/home/ReferralHighlight";
import NewArrivals from "@/components/home/NewArrivals";
import Categories from "@/components/home/Categories";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/home/Footer";
import { Menu, X, Home as HomeIcon, BookOpen, Tag, User, LogIn } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navbar with Glass Effect */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                AccessSellr
              </span>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Browse</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Categories</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Deals</a>
              <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-full px-4 py-1.5 text-sm">
                Sign In
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <MiniCartPreview />
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="sm:hidden p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sheet */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-[99] sm:hidden"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

          {/* Menu Sheet */}
          <div className="absolute right-0 top-0 bottom-0 w-[280px] bg-white shadow-xl transform transition-transform duration-300 ease-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">Menu</span>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto">
                <nav className="p-4 space-y-1">
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    <HomeIcon className="w-5 h-5 text-indigo-600" />
                    <span>Home</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    <span>Browse</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    <Tag className="w-5 h-5 text-indigo-600" />
                    <span>Categories</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    <Tag className="w-5 h-5 text-indigo-600" />
                    <span>Deals</span>
                  </a>
                </nav>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-100">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 flex items-center justify-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </Button>
                <a href="#" className="flex items-center gap-3 px-3 py-2 mt-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <User className="w-5 h-5 text-indigo-600" />
                  <span>Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rest of the content */}
      <main className="pt-14 sm:pt-16 pb-14 sm:pb-0">
        <Hero />
        
        {/* Featured Section with Background */}
        <div className="bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <FeaturedBooks />
          </div>
        </div>

        {/* Referral Section with Contrast */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto">
            <ReferralHighlight />
          </div>
        </div>

        {/* New Arrivals with Pattern Background */}
        <div className="bg-[url('/pattern.svg')] bg-opacity-5">
          <div className="max-w-7xl mx-auto">
            <NewArrivals />
          </div>
        </div>

        {/* Categories with Gradient */}
        <div className="bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <Categories />
          </div>
        </div>

        {/* How It Works with Clean Background */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto">
            <HowItWorks />
          </div>
        </div>

        {/* Testimonials with Subtle Pattern */}
        <div className="bg-[url('/pattern.svg')] bg-opacity-5">
          <div className="max-w-7xl mx-auto">
            <Testimonials />
          </div>
        </div>
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}
