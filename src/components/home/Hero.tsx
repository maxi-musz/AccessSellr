import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-900/90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Discover Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Favorite Book</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Explore our curated collection of bestselling books. Share with friends and earn rewards on every purchase.
          </p>
          
          {/* Search Bar */}
          {/* <div className="relative max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search books, authors, or genres..."
                className="w-full px-6 py-4 text-lg rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent backdrop-blur-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors">
                <Search className="w-6 h-6 text-white" />
              </button>
            </div>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button 
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg rounded-full px-8 font-medium"
              >
                Start Shopping
              </Button>
            </Link>
            <Link href="/about-referrals">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white border-white/50 hover:border-white rounded-full px-8 font-medium"
              >
                Learn About Referrals
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">10K+</div>
              <div className="text-sm text-gray-300">Books Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">5K+</div>
              <div className="text-sm text-gray-300">Happy Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">15%</div>
              <div className="text-sm text-gray-300">Referral Bonus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
