
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";

const CTA = () => {
  return (
    <TooltipProvider>
      <section className="py-16 bg-gradient-to-r from-groq-dark-blue to-groq-purple-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Transform Your Enterprise Learning?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
              Join our early access program and be among the first to experience the future of AI-driven gamified learning.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="text-md px-6 py-6 bg-white hover:bg-gray-100 text-groq-dark-blue transition-colors rounded-xl shadow-lg flex items-center gap-2">
                Request Early Access <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="text-md px-6 py-6 text-white border-white hover:bg-white/10 transition-all rounded-xl">
                Schedule a Demo
              </Button>
            </div>
            
            <div className="mt-8 bg-white/10 rounded-full px-6 py-2 inline-block">
              <span className="text-sm">Limited spots available for our beta program</span>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default CTA;
