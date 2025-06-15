'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

const newBooks = [
  {
    id: 101,
    title: "Digital Marketing Mastery",
    author: "Marketing Experts",
    desc: "Learn the art and science of digital marketing in the modern age.",
    price: "26.99",
    image: "/images/book-images/TBm-300x300.png",
    releaseDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  },
  {
    id: 102,
    title: "Business Growth Strategies",
    author: "Business Leaders",
    desc: "Proven strategies for sustainable business growth and success.",
    price: "21.99",
    image: "/images/book-images/mockup-2.png",
    releaseDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  },
  {
    id: 103,
    title: "E-commerce Success",
    author: "Industry Experts",
    desc: "The complete guide to building a successful online store.",
    price: "23.99",
    image: "/images/book-images/7733342_1580677080347book3d.png",
    releaseDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  },
  {
    id: 104,
    title: "Profit First",
    author: "Mike Michalowicz",
    desc: "Transform your business from a cash-eating monster to a money-making machine.",
    price: "24.99",
    image: "/images/book-images/profit-first.png",
    releaseDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  },
  {
    id: 105,
    title: "Launch",
    author: "Jeff Walker",
    desc: "The ultimate guide to launching your product or service online.",
    price: "29.99",
    image: "/images/book-images/Launch-Jeff-Walker-2.png",
    releaseDate: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  },
  {
    id: 106,
    title: "50 Shades of Growth",
    author: "Sid Bharath",
    desc: "A comprehensive guide to e-commerce growth strategies.",
    price: "19.99",
    image: "/images/book-images/Best-Ecommerce-Books-50-Shades-of-Growth-–-Sid-Bharath-and-D.png",
    releaseDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  }
];

export default function NewArrivals() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="py-8 sm:py-16 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-12">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">New Arrivals</h2>
            <p className="text-sm sm:text-base text-gray-600">Discover the latest releases from your favorite authors</p>
          </div>
          <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base">
            View All
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
          </Button>
        </div>

        <div className="relative">
          {/* Navigation Buttons - Hidden on Mobile */}
          <button 
            onClick={() => scroll('left')}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Grid Layout for Mobile, Scrollable for Desktop */}
          <div className="flex overflow-x-auto pb-6 gap-3 px-4 sm:px-0 sm:gap-4 sm:snap-x sm:snap-mandatory sm:scrollbar-hide">
            {newBooks.map((book) => (
              <Card key={book.id} className="group relative flex-none w-[140px] sm:w-[180px] overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 snap-start">
                <div className="aspect-[3/4] w-full bg-gray-100 relative overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image 
                      src={book.image} 
                      alt={book.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-1 left-1 sm:top-2 sm:left-2 flex items-center gap-0.5 px-1 sm:px-1.5 py-0.5 bg-white/90 rounded-full text-[8px] sm:text-[10px] font-medium text-indigo-600">
                    <Clock className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                    {book.releaseDate}
                  </div>
                </div>
                
                <CardContent className="p-1.5 sm:p-2">
                  <div className="flex items-start justify-between gap-1">
                    <div>
                      <h3 className="font-semibold text-[10px] sm:text-xs mb-0.5 line-clamp-1">{book.title}</h3>
                      <p className="text-[8px] sm:text-[10px] text-gray-500 mb-0.5">{book.author}</p>
                      <p className="text-[8px] sm:text-[10px] text-gray-600 line-clamp-2 mb-1">{book.desc}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-xs sm:text-sm font-bold text-indigo-600">${book.price}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-full py-0.5 h-5 sm:h-6 text-[8px] sm:text-[10px]">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Gradient Fade Effect - Hidden on Mobile */}
          <div className="hidden sm:block absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-white pointer-events-none" />
          <div className="hidden sm:block absolute left-0 top-0 bottom-8 w-24 bg-gradient-to-r from-white pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
