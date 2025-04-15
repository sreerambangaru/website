
import { useState } from "react";
import { Code, Layers, Shield, Cpu, BarChart3, Network } from "lucide-react";

const Technology = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="technology" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-groq-purple/5"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-groq-teal/5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-groq-purple/3 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="text-groq-purple">Technology</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At the intersection of cutting-edge AI and immersive gaming, our technology delivers personalized learning experiences that adapt to each user.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 transition-all duration-500 bg-white shadow-lg border border-gray-100
                ${hoveredIndex === index ? 'transform scale-105' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-groq-purple to-groq-teal flex items-center justify-center">
                  <feature.icon size={24} className="text-white" />
                </div>
                <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded text-gray-600">
                  {feature.category}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              
              {hoveredIndex === index && (
                <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
                  <h4 className="font-medium text-groq-purple mb-2">Key Capabilities:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {feature.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-groq-purple rounded-full"></span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block rounded-full bg-groq-purple/10 px-6 py-2 mb-4">
            <span className="text-groq-purple font-medium">Innovation in Progress</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            We're just scratching the surface
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our R&D team is continuously pushing boundaries to develop next-generation learning technologies.
            Join our waitlist to be among the first to experience our revolutionary approach.
          </p>
        </div>
      </div>
    </section>
  );
};

const techFeatures = [
  {
    title: "Adaptive AI Learning Engine",
    description: "Our proprietary AI analyzes learning styles, progress, and preferences to personalize content delivery.",
    icon: Brain,
    category: "AI Technology",
    capabilities: [
      "Real-time progress analysis",
      "Personalized difficulty scaling",
      "Learning pattern recognition",
      "Content recommendation engine"
    ]
  },
  {
    title: "Immersive Game Mechanics",
    description: "Engaging gameplay mechanisms designed specifically to enhance retention of complex information.",
    icon: Gamepad2,
    category: "Gamification",
    capabilities: [
      "Reward-based achievement systems",
      "Competitive and collaborative modes",
      "Progressive skill advancement",
      "Interactive simulation environments"
    ]
  },
  {
    title: "Enterprise Integration Framework",
    description: "Seamless integration with existing corporate systems and learning management platforms.",
    icon: Code,
    category: "Enterprise Solutions",
    capabilities: [
      "API-first architecture",
      "LMS compatibility",
      "Single sign-on support",
      "Progress tracking & reporting"
    ]
  },
  {
    title: "Secure Data Infrastructure",
    description: "Enterprise-grade security ensuring all data is protected with industry-leading standards.",
    icon: Shield,
    category: "Security",
    capabilities: [
      "End-to-end encryption",
      "GDPR compliance",
      "Role-based access control",
      "Secure cloud infrastructure"
    ]
  },
  {
    title: "Advanced Analytics Platform",
    description: "Comprehensive insights into learning effectiveness and engagement metrics for management.",
    icon: BarChart3,
    category: "Analytics",
    capabilities: [
      "Performance dashboards",
      "Engagement metrics",
      "Learning outcome analysis",
      "Custom reporting tools"
    ]
  },
  {
    title: "Knowledge Graph Technology",
    description: "Sophisticated mapping of information relationships to enhance understanding of complex topics.",
    icon: Network,
    category: "Knowledge Management",
    capabilities: [
      "Concept relationship mapping",
      "Knowledge gap identification",
      "Custom curriculum building",
      "Content relationship visualization"
    ]
  }
];

// To satisfy TypeScript import requirements
import { Brain, Gamepad2 } from "lucide-react";

export default Technology;
