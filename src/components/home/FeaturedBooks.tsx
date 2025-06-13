'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Image from "next/image";

const books = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Book Title ${i + 1}`,
  author: `Author Name ${i + 1}`,
  desc: "A captivating story that will keep you hooked from start to finish.",
  price: (12.99 + i).toFixed(2),
  rating: 4 + (i % 2) * 0.5,
  image: `/book${(i % 4) + 1}.jpg`,
  category: ["Fiction", "Non-Fiction", "Mystery", "Romance"][i % 4],
}));

export default function FeaturedBooks() {
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
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Featured Books</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-lg">
            Discover our handpicked selection of bestselling books across various genres
          </p>
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
            {books.map((book) => (
              <Card 
                key={book.id} 
                className="group relative flex-none w-[140px] sm:w-[180px] overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 snap-start"
              >
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
                  <button className="absolute top-1 right-1 sm:top-2 sm:right-2 p-1 rounded-full bg-white/90 text-gray-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                    <Heart className="w-2 h-2 sm:w-3 sm:h-3" />
                  </button>
                </div>
                
                <CardContent className="p-1.5 sm:p-2">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-[8px] sm:text-[10px] font-medium px-1 py-0.5 rounded-full bg-indigo-100 text-indigo-600">
                      {book.category}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-yellow-400" />
                      <span className="text-[8px] sm:text-[10px] ml-0.5">{book.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-[10px] sm:text-xs mb-0.5 line-clamp-1">{book.title}</h3>
                  <p className="text-[8px] sm:text-[10px] text-gray-500 mb-0.5">{book.author}</p>
                  <p className="text-[8px] sm:text-[10px] text-gray-600 line-clamp-2 mb-1">{book.desc}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-indigo-600">${book.price}</span>
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white px-1.5 py-0.5 h-5 sm:h-6 text-[8px] sm:text-[10px]">
                      <ShoppingCart className="w-2 h-2 sm:w-2.5 sm:h-2.5 mr-0.5" />
                      Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Gradient Fade Effect - Hidden on Mobile */}
          <div className="hidden sm:block absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-white pointer-events-none" />
          <div className="hidden sm:block absolute left-0 top-0 bottom-8 w-24 bg-gradient-to-r from-white pointer-events-none" />
        </div>

        <div className="text-center mt-6 sm:mt-12">
          <Button 
            variant="outline" 
            className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-full px-6 sm:px-8 py-1.5 sm:py-2 text-sm sm:text-base"
          >
            View All Books
          </Button>
        </div>
      </div>
    </div>
  );
}
