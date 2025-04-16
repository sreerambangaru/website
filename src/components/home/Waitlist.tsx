import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const Waitlist = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");

      toast({
        title: "You're on the list!",
        description:
          "Thank you for joining our waitlist. We'll keep you updated.",
      });
    }, 1500);
  };

  return (
    <section id="waitlist" className="bg-groq-purple/10 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-groq-dark-blue bg-[#508CA4] p-8 text-white">
              <h3 className="text-2xl font-display font-bold mb-4">
                Join Our Waitlist
              </h3>
              <p className="mb-6 text-gray-200">
                Be the first to experience our revolutionary AI-driven learning
                games and receive:
              </p>

              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* <div className="mt-8">
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <span>+240 companies already on the waitlist</span>
                </div>
              </div> */}
            </div>

            <div className="p-8">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-display font-bold mb-2">
                    Request Early Access
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Enter your email to secure your spot in our exclusive beta
                    program.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="waitlist-email"
                        className="text-sm font-medium"
                      >
                        Business Email
                      </label>
                      <Input
                        id="waitlist-email"
                        disabled
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled
                      className="w-full bg-[#508CA4] hover:opacity-90 transition-opacity"
                    >
                      {isSubmitting ? "Processing..." : "Join Waitlist"}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      We'll never share your email with third parties.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for your interest in Groqify. We'll be in touch
                    with updates soon.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-4"
                  >
                    Add Another Email
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const benefits = [
  "Early access to beta features",
  "Receive updates on game launch dates",
  "Personalized onboarding & support",
];

export default Waitlist;
