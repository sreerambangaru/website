
import { useState } from "react";
import { Linkedin, Twitter, Globe } from "lucide-react";

const Team = () => {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);
  
  return (
    <section id="team" className="section-padding bg-gray-50 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Meet the <span className="text-groq-purple">Innovators</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our team combines expertise in artificial intelligence, game development, and enterprise learning
            to create revolutionary training solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={index} 
              member={member} 
              isActive={activeTeamMember === index}
              onClick={() => setActiveTeamMember(activeTeamMember === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-20 bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Join Our Growing Team</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals who are passionate about innovation in AI, 
                gaming, and enterprise learning solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium text-sm">
                  AI Engineers
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium text-sm">
                  Game Developers
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium text-sm">
                  UX/UI Designers
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium text-sm">
                  Learning Specialists
                </div>
              </div>
              <button className="mt-6 px-6 py-3 bg-groq-dark-blue hover:bg-opacity-90 transition-colors text-white font-medium rounded-lg">
                View Open Positions
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-groq-purple to-groq-teal p-[2px] rounded-xl">
                <div className="bg-white p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold mb-2">30+</div>
                  <div className="text-gray-600">Brilliant minds working together</div>
                  <div className="flex justify-center gap-6 mt-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-groq-purple">12</div>
                      <div className="text-sm text-gray-600">PhDs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-groq-purple">8</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-groq-purple">5</div>
                      <div className="text-sm text-gray-600">Patents</div>
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

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  links: {
    linkedin?: string;
    twitter?: string;
    personal?: string;
  }
}

const TeamMemberCard = ({ 
  member, 
  isActive,
  onClick 
}: { 
  member: TeamMember; 
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300
        ${isActive ? 'transform scale-105 shadow-xl' : 'hover:shadow-xl hover:transform hover:scale-102'}`}
      onClick={onClick}
    >
      <div className="relative cursor-pointer">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-xl font-display font-bold text-white">{member.name}</h3>
          <p className="text-white/90">{member.role}</p>
        </div>
      </div>
      
      {isActive && (
        <div className="p-4 bg-white animate-fade-in">
          <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
          
          <div className="flex gap-3">
            {member.links.linkedin && (
              <a href={member.links.linkedin} className="text-gray-500 hover:text-groq-purple transition-colors">
                <Linkedin size={18} />
              </a>
            )}
            {member.links.twitter && (
              <a href={member.links.twitter} className="text-gray-500 hover:text-groq-purple transition-colors">
                <Twitter size={18} />
              </a>
            )}
            {member.links.personal && (
              <a href={member.links.personal} className="text-gray-500 hover:text-groq-purple transition-colors">
                <Globe size={18} />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const teamMembers: TeamMember[] = [
  {
    name: "Alexandra Chen",
    role: "CEO & Co-founder",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
    bio: "Former AI Research Lead at Google DeepMind with a PhD in Computer Science from Stanford. Alex has published over 30 papers on machine learning and educational technology.",
    links: {
      linkedin: "#",
      twitter: "#",
      personal: "#"
    }
  },
  {
    name: "Marcus Johnson",
    role: "CTO & Co-founder",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80",
    bio: "Former Lead Game Developer at Blizzard with 15+ years of experience in creating engaging, educational gameplay mechanics and immersive experiences.",
    links: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Dr. Priya Sharma",
    role: "Chief AI Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1388&q=80",
    bio: "Leading expert in adaptive learning algorithms with a background in cognitive science. Previously led research teams at Microsoft Research and has 5 patents in AI education.",
    links: {
      linkedin: "#",
      personal: "#"
    }
  },
  {
    name: "David Rodriguez",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1615109398623-41219a4607ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    bio: "Expert in UX design and gamification with previous experience leading product teams at Duolingo and Coursera. MBA from Harvard Business School.",
    links: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

export default Team;
