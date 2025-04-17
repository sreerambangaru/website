import { Sparkles, Brain, Gamepad2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="text-[#508CA4]">Groqify</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're reimagining enterprise learning through the power of AI and
            gamification. Currently in stealth mode, we're preparing to
            transform how organizations approach training and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
            >
              <div className="w-14 h-14 rounded-lg bg-[#508CA4] from-groq-purple to-groq-teal mb-5 flex items-center justify-center">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-groq-dark-blue bg-[#508CA4] rounded-2xl p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Our Vision
              </h3>
              <p className="text-white/90 mb-6">
                At Groqify, we envision a future where enterprise learning is
                not just effective, but engaging and enjoyable. Our AI-driven
                platform analyzes individual learning patterns to deliver
                personalized, game-based experiences that boost knowledge
                retention and employee satisfaction.
              </p>
              <p className="text-white/90">
                We're working closely with select enterprise partners to
                fine-tune our technology before our official launch. Our stealth
                mode allows us to innovate freely while building solutions that
                truly address the pain points of modern corporate training.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-groq-purple/20 blur-xl rounded-full"></div>
                <div className="relative h-56 w-56 rounded-full bg-groq-dark-blue/80 border border-white/20 flex items-center justify-center animate-pulse-glow overflow-hidden">
                  <Sparkles size={80} className="text-white opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "AI-Powered Learning",
    description:
      "Our advanced AI algorithms adapt learning experiences to individual needs, optimizing knowledge retention and engagement.",
    icon: Brain,
  },
  {
    title: "Gamification Experts",
    description:
      "We transform complex training into engaging gameplay, making learning enjoyable and effective for all employees.",
    icon: Gamepad2,
  },
  {
    title: "Enterprise Innovation",
    description:
      "Built specifically for corporate environments, our solutions integrate seamlessly with existing learning management systems.",
    icon: Sparkles,
  },
];

export default About;
