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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                AccessSellr
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Browse</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Categories</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Deals</a>
              <MiniCartPreview />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content with Proper Spacing */}
      <main className="pt-16">
        <Hero />
        
        {/* Featured Section with Background */}
        <div className="bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <FeaturedBooks />
          </div>
        </div>

        {/* Referral Section with Contrast */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <ReferralHighlight />
          </div>
        </div>

        {/* New Arrivals with Pattern Background */}
        <div className="bg-[url('/pattern.svg')] bg-opacity-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <NewArrivals />
          </div>
        </div>

        {/* Categories with Gradient */}
        <div className="bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <Categories />
          </div>
        </div>

        {/* How It Works with Clean Background */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <HowItWorks />
          </div>
        </div>

        {/* Testimonials with Subtle Pattern */}
        <div className="bg-[url('/pattern.svg')] bg-opacity-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <Testimonials />
          </div>
        </div>
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}
