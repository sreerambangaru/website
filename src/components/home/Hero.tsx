
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center bg-hero-gradient overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full bg-groq-purple/20 blur-[80px] animate-pulse-glow"></div>
        <div className="absolute bottom-[15%] left-[10%] w-80 h-80 rounded-full bg-groq-teal/20 blur-[100px] animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Revolutionizing <span className="hero-text-gradient">Enterprise Learning</span> with AI-Driven Games
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
              Empower your workforce with engaging, AI-powered learning experiences that transform training into exciting gameplay, boosting retention and productivity.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button className="text-md px-6 py-6 bg-button-gradient hover:opacity-90 transition-opacity flex items-center gap-2 rounded-xl shadow-lg">
                Join Our Waitlist <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="text-md px-6 py-6 text-white border-white/30 hover:bg-white/10 transition-all rounded-xl">
                Learn More
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-white/70 text-sm">
                <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium">STEALTH MODE</span>
                {' '}Currently in private beta with select enterprise partners
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-groq-purple/30 blur-2xl rounded-full"></div>
              <div className="relative bg-card-gradient rounded-2xl p-1 border border-white/30 shadow-xl animate-float">
                <div className="bg-groq-dark-blue/90 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" 
                    alt="Groqify AI Learning Platform" 
                    className="w-full h-auto max-w-md opacity-80 mix-blend-lighten"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-6 py-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10">
                      <h3 className="text-xl font-display font-bold text-white mb-2">AI-Powered Gaming Experience</h3>
                      <p className="text-white/80 text-sm">Personalized learning through advanced AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
