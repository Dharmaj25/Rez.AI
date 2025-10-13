import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Build your first AI-powered resume and explore Rez.AI’s core tools.",
    features: [
      "1 AI-generated resume",
      "Basic template access",
      "Download in PDF format",
      "AI resume feedback (limited)",
      "Email support",
    ],
    buttonLabel: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$15",
    description: "Unlock the full power of AI to craft personalized, job-winning resumes.",
    features: [
      "Unlimited resume generations",
      "Full template library access",
      "AI-based job keyword optimization",
      "Smart portfolio link generation",
      "Instant download in multiple formats",
      "Priority customer support",
    ],
    buttonLabel: "Upgrade to Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams, hiring platforms, and universities looking to empower users at scale.",
    features: [
      "Team & multi-user access",
      "Custom branding & integrations",
      "Centralized analytics dashboard",
      "Dedicated success manager",
      "Enterprise-grade support",
    ],
    buttonLabel: "Contact Sales",
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="relative pb-14 bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6">
            Pricing that Grows <br />
            <span className="text-blue-500">with your career</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl font-semibold mx-auto mb-2">
            Whether you’re crafting your first resume or building a portfolio of achievements,
            Rez.AI grows with you.
          </p>
          <p className="text-blue-500 text-base sm:text-lg md:text-xl font-semibold  mx-auto">
            Transparent. Simple. Powerful.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer max-w-sm mx-auto
                ${plan.highlight
                  ? "border-blue-400 bg-white/70 scale-100 sm:scale-105"
                  : "border-gray-200 bg-white/50"
                } 
                hover:border-blue-500 hover:shadow-2xl hover:-translate-y-1`}
            >
              {/* Most Popular Badge */}
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 text-xs sm:text-sm tracking-wide font-semibold text-white bg-blue-500 py-2 rounded-t-3xl">
                  MOST POPULAR
                </div>
              )}

              <div>
                <CardHeader className={`${plan.highlight ? "mt-8 sm:mt-10" : "mt-6 sm:mt-8"}`}>
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base">{plan.description}</p>
                </CardHeader>

                <CardContent className="mt-4 sm:mt-6">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-500 mb-4 sm:mb-6">
                    {plan.price}
                    {plan.price !== "Free" && plan.price !== "Custom" && (
                      <span className="text-base sm:text-lg font-medium text-gray-500">/mo</span>
                    )}
                  </div>

                  <ul className="text-left space-y-2 sm:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>

              <div className="mt-auto">
                <Button
                  className={`w-full text-base sm:text-lg font-semibold py-4 sm:py-6 rounded-xl transition-all duration-300 shadow-none
                    ${!plan.highlight
                      ? "bg-white text-blue-500 hover:bg-blue-50 border border-blue-500 hover:bg-blue-500 hover:text-white"
                      : "bg-blue-500 text-white hover:bg-blue-700"
                    }`}
                >
                  {plan.buttonLabel}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
