import MiniCartPreview from "@/components/home/MiniCartPreview";
import Hero from "@/components/home/Hero";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import ReferralHighlight from "@/components/home/ReferralHighlight";
import NewArrivals from "@/components/home/NewArrivals";
import Categories from "@/components/home/Categories";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navbar with Glass Effect */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
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
            </div>
            <div className="flex items-center">
              <MiniCartPreview />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-white border-t border-gray-100 z-50">
        <div className="flex items-center justify-around h-14">
          <a href="#" className="flex flex-col items-center text-xs text-gray-600">
            <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </a>
          <a href="#" className="flex flex-col items-center text-xs text-gray-600">
            <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Browse
          </a>
          <a href="#" className="flex flex-col items-center text-xs text-gray-600">
            <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Cart
          </a>
          <a href="#" className="flex flex-col items-center text-xs text-gray-600">
            <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Profile
          </a>
        </div>
      </div>

      {/* Main Content with Proper Spacing */}
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
