'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

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
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Books</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our handpicked selection of bestselling books across various genres
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide"
          >
            {books.map((book) => (
              <Card 
                key={book.id} 
                className="group relative flex-none w-[250px] overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 snap-start"
              >
                <div className="aspect-[3/4] w-full bg-gray-100 relative overflow-hidden">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-gray-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-100 text-indigo-600">
                      {book.category}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-3 h-3 fill-yellow-400" />
                      <span className="text-xs ml-1">{book.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-base mb-1 line-clamp-1">{book.title}</h3>
                  <p className="text-xs text-gray-500 mb-2">{book.author}</p>
                  <p className="text-gray-600 text-xs line-clamp-2 mb-3">{book.desc}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-indigo-600">${book.price}</span>
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 h-8">
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Gradient Fade Effect */}
          <div className="absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-white pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-8 w-24 bg-gradient-to-r from-white pointer-events-none" />
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-full px-8 py-2"
          >
            View All Books
          </Button>
        </div>
      </div>
    </div>
  );
}
