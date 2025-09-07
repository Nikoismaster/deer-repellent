'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { ChevronDown, Shield, Clock, Zap, Volume2, Sun, Droplets } from 'lucide-react';
import CTAButton from '@/components/UI/CTAButton';

// FAQ Accordion Component
function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        <ChevronDown 
          className={`h-5 w-5 text-gray-500 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="text-gray-700 leading-relaxed">{answer}</div>
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ question, answer }: { question: string; answer: string | React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FAQItem
      question={question}
      answer={answer}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    />
  );
}

export default function FAQPage() {
  const faqCategories = {
    effectiveness: {
      title: "Effectiveness & Performance",
      icon: Shield,
      questions: [
        {
          question: "How effective is the ultrasonic deer repellent?",
          answer: (
            <div>
              <p className="mb-3">Our deer repellent has a 95% success rate based on customer feedback and field testing. The effectiveness depends on several factors:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Proper placement:</strong> Install 3-4 feet high facing the area to protect</li>
                <li><strong>Clear line of sight:</strong> Ultrasonic waves travel in straight lines</li>
                <li><strong>Coverage area:</strong> Each unit covers up to 30 feet radius</li>
                <li><strong>Environmental factors:</strong> Works best in open areas without dense vegetation blocking the sensor</li>
              </ul>
              <p className="mt-3">Most customers see results within 1-3 days of installation.</p>
            </div>
          )
        },
        {
          question: "Will deer get used to the ultrasonic sound over time?",
          answer: "Our device uses variable frequency output and random activation patterns to prevent habituation. The 5 different working modes ensure deer don't adapt to a consistent pattern. Additionally, the combination of ultrasonic sound and LED flash provides multiple deterrent methods."
        },
        {
          question: "Does it work on other animals besides deer?",
          answer: (
            <div>
              <p className="mb-3">Yes! The ultrasonic frequency and motion detection work effectively on many animals:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Primary targets:</strong> Deer, elk, moose</li>
                <li><strong>Also effective on:</strong> Raccoons, skunks, opossums, cats, dogs</li>
                <li><strong>Birds:</strong> LED flash mode is particularly effective for birds</li>
                <li><strong>Small rodents:</strong> Rabbits, squirrels (use Mode 1)</li>
              </ul>
              <p className="mt-3">Different modes are optimized for different animal types.</p>
            </div>
          )
        },
        {
          question: "How large of an area does one unit cover?",
          answer: "Each unit covers up to 30 feet in radius with a 110-degree detection angle, providing approximately 2,600 square feet of coverage. For larger properties, we recommend the double pack for overlapping coverage and maximum effectiveness."
        }
      ]
    },
    installation: {
      title: "Installation & Setup",
      icon: Zap,
      questions: [
        {
          question: "How difficult is it to install?",
          answer: (
            <div>
              <p className="mb-3">Installation is extremely simple and takes less than 5 minutes:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Choose location 3-4 feet high with clear view of protected area</li>
                <li>Insert ground stake into soil OR mount on wall/fence</li>
                <li>Attach device to mounting system</li>
                <li>Select desired working mode (1-5)</li>
                <li>Device is ready to work immediately</li>
              </ol>
              <p className="mt-3">No tools required - everything is included in the package.</p>
            </div>
          )
        },
        {
          question: "What's the best height and placement for installation?",
          answer: "Install the device 3-4 feet above ground level for optimal deer detection. Face the sensor toward the area you want to protect, ensuring there are no obstacles (trees, bushes, fences) blocking the sensor's view. For gardens, place it at the perimeter facing inward."
        },
        {
          question: "Can I mount it on a wall or fence?",
          answer: "Yes! The package includes both a ground stake and wall mounting bracket. You can mount it on walls, fences, posts, or trees. Just ensure the sensor has a clear view of the protected area and the solar panel faces south for optimal charging."
        },
        {
          question: "How do I know if it's working properly?",
          answer: "The device has a built-in LED indicator that shows when it's activated. You can test it by walking in front of the sensor - you should see the LED flash. The ultrasonic sound is inaudible to humans, but the LED flash confirms the device is working."
        }
      ]
    },
    technical: {
      title: "Technical & Power",
      icon: Sun,
      questions: [
        {
          question: "How long does the battery last?",
          answer: "The 2000mAh lithium battery provides 30+ days of operation on a full charge. With the solar panel, the device operates indefinitely in normal sunlight conditions. Even during winter or extended cloudy periods, the battery maintains operation for weeks."
        },
        {
          question: "What happens if there's no sun for several days?",
          answer: "The large 2000mAh battery is designed for extended cloudy periods. In winter conditions with minimal sunlight, the battery can power the device for 30-45 days. You can also use the included USB cable to charge the battery if needed."
        },
        {
          question: "Is it weatherproof?",
          answer: "Yes, the device has an IP65 weatherproof rating, making it completely resistant to rain, snow, and extreme weather. The operating temperature range is -20°C to +60°C (-4°F to 140°F), suitable for year-round outdoor use."
        },
        {
          question: "Can I hear the ultrasonic sound?",
          answer: "No, the 25kHz ultrasonic frequency is above human hearing range (which typically extends to 20kHz). You won't hear any sound from the device. The frequency is specifically chosen to be uncomfortable for deer while being completely inaudible to humans."
        }
      ]
    },
    safety: {
      title: "Safety & Environment",
      icon: Shield,
      questions: [
        {
          question: "Is it safe for children and pets?",
          answer: (
            <div>
              <p className="mb-3">Absolutely safe! The device is designed with safety as a priority:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Children:</strong> Cannot hear the ultrasonic frequency, LED flash is harmless</li>
                <li><strong>Dogs & Cats:</strong> May initially notice the sound but causes no harm</li>
                <li><strong>No chemicals:</strong> Completely chemical-free operation</li>
                <li><strong>No physical harm:</strong> Sound waves are pressure waves, not harmful radiation</li>
              </ul>
              <p className="mt-3">The device simply encourages animals to move away without causing any injury.</p>
            </div>
          )
        },
        {
          question: "Does it harm the deer or other animals?",
          answer: "No, the device is completely humane. It creates an uncomfortable environment that encourages deer to leave the area, but causes no physical harm. Think of it like a smoke alarm - annoying but not harmful. This is a wildlife-friendly solution that simply redirects animals to other areas."
        },
        {
          question: "Is it environmentally friendly?",
          answer: "Yes! The device is powered entirely by renewable solar energy with no ongoing electricity costs. It contains no chemicals, produces no emissions, and the durable construction means it lasts for years. It's one of the most eco-friendly deer control methods available."
        }
      ]
    },
    purchase: {
      title: "Purchase & Warranty",
      icon: Clock,
      questions: [
        {
          question: "What's included in the package?",
          answer: (
            <div>
              <p className="mb-3">Each package includes everything needed for installation:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Solar Deer Repellent Device</li>
                <li>Ground Mounting Stake</li>
                <li>Wall Mounting Bracket</li>
                <li>USB Charging Cable (backup charging)</li>
                <li>Complete User Manual & Installation Guide</li>
                <li>Warranty Card</li>
              </ul>
              <p className="mt-3">No additional tools or parts required!</p>
            </div>
          )
        },
        {
          question: "What's your return policy?",
          answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the results, return the device for a full refund. We're confident in our product's effectiveness, which is why we can offer this guarantee."
        },
        {
          question: "How long is the warranty?",
          answer: "The device comes with a 2-year manufacturer warranty covering defects in materials and workmanship. This covers the solar panel, battery, electronics, and housing. Normal wear and tear from weather exposure is expected and covered."
        },
        {
          question: "Do you offer customer support?",
          answer: "Yes! We provide full customer support via email at support@rodentlab.com and phone at 1-800-DEER-AWAY. Our support team can help with installation questions, troubleshooting, and warranty claims. Average response time is under 24 hours."
        },
        {
          question: "Why should I buy 2 units instead of 1?",
          answer: "The double pack offers better value ($20 savings) and improved coverage. Two units provide overlapping protection, eliminate blind spots, and ensure no gaps in coverage. For properties larger than 2,500 sq ft, two units significantly improve effectiveness."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-green-600">Home</a>
            <span>/</span>
            <span className="text-gray-900">FAQ</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Get answers to common questions about our solar-powered deer repellent. 
            Can't find what you're looking for? Contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="single" />
            <a 
              href="mailto:support@rodentlab.com" 
              className="px-6 py-3 border border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(faqCategories).map(([key, category]) => (
            <div key={key} className="mb-12">
              <div className="flex items-center mb-8">
                <div className="bg-green-100 rounded-lg p-3 mr-4">
                  <category.icon className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.questions.map((faq, index) => (
                  <FAQAccordion key={index} {...faq} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our customer support team is here to help you get the most out of your deer repellent.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Get detailed answers to technical questions</p>
              <a 
                href="mailto:support@rodentlab.com"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                support@rodentlab.com
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Speak directly with our support team</p>
              <a 
                href="tel:1-800-333-7292"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                1-800-DEER-AWAY
              </a>
            </div>
          </div>

          <div className="bg-green-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Protect Your Garden?</h3>
            <p className="text-green-100 mb-6">
              Join thousands of satisfied customers with our 30-day money-back guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                variant="single" 
                size="large"
                className="!bg-white !text-green-600 hover:!bg-gray-100 hover:!text-green-700 font-bold"
              />
              <CTAButton 
                variant="double" 
                size="large"
                className="!bg-yellow-500 hover:!bg-yellow-600 !text-white font-bold"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}