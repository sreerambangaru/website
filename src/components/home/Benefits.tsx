
import { CheckCircle2 } from "lucide-react";

const Benefits = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Benefits for <span className="text-groq-purple">Enterprises</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our AI-driven learning games deliver measurable improvements across key business metrics,
            transforming how organizations approach employee development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Engaged employees using Groqify" 
              className="rounded-xl shadow-xl"
            />
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-groq-dark-blue">
              Transform Learning into Engagement
            </h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-groq-purple" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                    
                    {benefit.metrics && (
                      <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {benefit.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-gray-50 p-3 rounded-lg text-center">
                            <div className="text-2xl font-bold text-groq-purple">{metric.value}</div>
                            <div className="text-sm text-gray-600">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-groq-purple/10 to-groq-teal/10 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-groq-purple mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
                <p className="text-gray-600 text-sm mt-2">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const benefits = [
  {
    title: "Higher Employee Engagement",
    description: "Transform mandatory training from a chore to an experience employees actually look forward to, driving voluntary participation and completion rates.",
    metrics: [
      { value: "+84%", label: "Completion Rate" },
      { value: "+62%", label: "Voluntary Usage" },
      { value: "-40%", label: "Training Time" }
    ]
  },
  {
    title: "Improved Knowledge Retention",
    description: "Our AI-powered spaced repetition and gamified learning mechanics significantly boost knowledge retention compared to traditional methods.",
    metrics: [
      { value: "+72%", label: "Retention Rate" },
      { value: "+65%", label: "Practical Application" }
    ]
  },
  {
    title: "Enhanced Productivity",
    description: "Employees trained using Groqify's solutions demonstrate higher productivity and faster application of new skills in real-world scenarios.",
    metrics: [
      { value: "+28%", label: "Productivity" },
      { value: "-35%", label: "Time to Competency" }
    ]
  },
  {
    title: "Future-Proof Training Solutions",
    description: "Our continuously evolving AI ensures your training platform grows with your organization, adapting to new knowledge areas and changing business needs.",
  }
];

const stats = [
  {
    value: "94%",
    label: "Satisfaction Rate",
    description: "Employees report higher satisfaction with Groqify vs traditional training"
  },
  {
    value: "3.2x",
    label: "ROI Factor",
    description: "Average return on investment compared to traditional learning methods"
  },
  {
    value: "76%",
    label: "Reduction",
    description: "In training-related support tickets and questions"
  },
  {
    value: "8.7/10",
    label: "Manager Rating",
    description: "Average score from learning & development leaders"
  }
];

export default Benefits;
