import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Book Enthusiast",
    avatar: "/avatar1.jpg",
    rating: 5,
    text: "I've discovered so many amazing books through this platform. The referral program is fantastic - I've earned enough to fund my entire reading habit!",
    location: "New York, USA"
  },
  {
    name: "Michael Chen",
    role: "Content Creator",
    avatar: "/avatar2.jpg",
    rating: 5,
    text: "As a book reviewer, I love recommending books to my audience. The referral system makes it even better - I can earn while sharing my passion.",
    location: "London, UK"
  },
  {
    name: "Emma Rodriguez",
    role: "Student",
    avatar: "/avatar3.jpg",
    rating: 4.5,
    text: "Perfect for students! I've found all my textbooks here and earned back some of my expenses through referrals. The selection is incredible.",
    location: "Toronto, Canada"
  }
];

export default function Testimonials() {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Readers Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join thousands of satisfied readers who have found their next favorite book and earned rewards
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {testimonials.map((t, i) => (
          <div key={i} className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100" 
                />
                <div>
                  <h3 className="font-semibold text-lg">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(Math.floor(t.rating))].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                {t.rating % 1 !== 0 && (
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 opacity-50" />
                )}
              </div>

              <p className="text-gray-600 mb-6">"{t.text}"</p>

              <div className="flex items-center text-indigo-600 text-sm font-medium">
                Read full review
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-full px-8">
          View All Reviews
        </Button>
      </div>
    </div>
  );
}
