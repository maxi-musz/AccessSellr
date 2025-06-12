import { BookOpen, Share2, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
    title: "Browse Books",
    desc: "Find your next read from our curated collection of bestselling books.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: <Share2 className="w-8 h-8 text-indigo-600" />,
    title: "Share Referral",
    desc: "Invite friends with your unique referral link and earn rewards.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: <DollarSign className="w-8 h-8 text-indigo-600" />,
    title: "Earn Commission",
    desc: "Get paid for every successful purchase made through your link.",
    color: "from-purple-500 to-pink-500"
  },
];

export default function HowItWorks() {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Start earning rewards in three simple steps. It's easy, fast, and rewarding!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            {/* Connector Line */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 -translate-y-1/2" />
            )}
            
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}>
                <div className="text-white">{step.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-6">{step.desc}</p>
              <div className="flex items-center text-indigo-600 font-medium">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8">
          Start Earning Now
        </Button>
      </div>
    </div>
  );
}
