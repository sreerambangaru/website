
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message sent!",
        description: "Thank you for your interest. We'll get back to you shortly.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get in <span className="text-groq-purple">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Interested in learning more about Groqify or joining our early access program? 
            Reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-groq-purple/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-groq-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <a href="mailto:contact@groqify.com" className="text-groq-purple hover:underline">
                      contact@groqify.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">For general inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-groq-purple/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-groq-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Phone</h4>
                    <a href="tel:+15551234567" className="text-groq-purple hover:underline">
                      +1 (555) 123-4567
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Monday-Friday, 9AM-5PM PST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-groq-purple/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-groq-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Office</h4>
                    <p className="text-gray-800">
                      123 Innovation Drive<br />
                      San Francisco, CA 94103
                    </p>
                    <p className="text-sm text-gray-600 mt-1">By appointment only</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-groq-dark-blue rounded-lg text-white">
                <h4 className="font-medium mb-2">Early Access Program</h4>
                <p className="text-sm text-gray-200">
                  Interested in becoming a beta partner? Mention "Early Access" in your message
                  and we'll prioritize your request.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="focus:border-groq-purple focus:ring-groq-purple"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="focus:border-groq-purple focus:ring-groq-purple"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Inc."
                  className="focus:border-groq-purple focus:ring-groq-purple"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  required
                  className="focus:border-groq-purple focus:ring-groq-purple"
                />
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-button-gradient hover:opacity-90 transition-opacity py-6"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-groq-purple hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
