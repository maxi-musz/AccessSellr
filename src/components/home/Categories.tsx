'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const categories = [
  { 
    name: "Fiction", 
    image: "/cat-fiction.jpg",
    count: "2.5k+ Books",
    description: "Explore captivating stories and novels"
  },
  { 
    name: "Non-Fiction", 
    image: "/cat-nonfiction.jpg",
    count: "1.8k+ Books",
    description: "Learn from expert authors"
  },
  { 
    name: "Children", 
    image: "/cat-children.jpg",
    count: "1.2k+ Books",
    description: "Fun and educational reads"
  },
  { 
    name: "Academics", 
    image: "/cat-academics.jpg",
    count: "3k+ Books",
    description: "Textbooks and study materials"
  },
];

export default function Categories() {
  return (
    <div>
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Categories</h2>
          <p className="text-gray-600">Browse through our extensive collection of books</p>
        </div>
        <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-full px-6">
          All Categories
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Card key={cat.name} className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-square w-full bg-gray-100 relative overflow-hidden">
              <div className="relative w-full h-full">
                <Image 
                  src={cat.image} 
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
                  <p className="text-sm text-gray-200 mb-3">{cat.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{cat.count}</span>
                    <Button size="sm" className="bg-white text-indigo-600 hover:bg-gray-100 rounded-full">
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
