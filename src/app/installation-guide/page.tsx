import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, AlertTriangle, MapPin, Sun, Zap, Settings, Wrench, Eye, Clock, ArrowRight } from 'lucide-react';
import CTAButton from '@/components/UI/CTAButton';

export const metadata: Metadata = {
  title: 'Installation Guide - Solar Deer Repellent Setup Instructions',
  description: 'Complete step-by-step installation guide for your solar-powered ultrasonic deer repellent. Easy 5-minute setup with no tools required.',
  keywords: [
    'deer repellent installation',
    'solar deer deterrent setup',
    'ultrasonic repellent install',
    'deer control installation guide',
    'motion sensor setup'
  ],
  openGraph: {
    title: 'Easy Installation Guide - Solar Deer Repellent Setup',
    description: 'Professional installation instructions with photos and tips for optimal deer deterrent placement.',
  },
};

export default function InstallationGuidePage() {
  const installationSteps = [
    {
      step: 1,
      title: "Choose the Perfect Location",
      description: "Strategic placement is key to maximum effectiveness",
      details: [
        "Select area 3-4 feet above ground level",
        "Ensure clear line of sight to protected area", 
        "Face sensor toward the garden/lawn to protect",
        "Solar panel should face south for optimal charging",
        "Avoid areas with dense foliage blocking the sensor"
      ],
      tips: [
        "For gardens: Place at perimeter facing inward",
        "For driveways: Mount on post or fence nearby",
        "For large areas: Consider multiple units for overlap"
      ],
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&auto=format"
    },
    {
      step: 2,
      title: "Mount the Device",
      description: "Two mounting options included for any situation",
      details: [
        "Ground stake: Push firmly into soil until stable",
        "Wall bracket: Use included screws for fence/wall mounting",
        "Ensure device is level and secure",
        "Check that solar panel faces upward",
        "Verify sensor has unobstructed view"
      ],
      tips: [
        "Ground stake works best in soft soil",
        "Use wall bracket for hard surfaces or windy areas",
        "Tilt solar panel slightly south if possible"
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&auto=format"
    },
    {
      step: 3,
      title: "Select Working Mode",
      description: "Choose the right mode for your specific situation",
      details: [
        "Mode 1: Ultrasonic only - Quiet operation",
        "Mode 2: LED flash only - Visual deterrent", 
        "Mode 3: Both ultrasonic and LED - Maximum effect",
        "Mode 4: Random pattern - Prevents habituation",
        "Mode 5: 24/7 activation - Continuous protection"
      ],
      tips: [
        "Mode 3 recommended for most deer problems",
        "Use Mode 1 in residential areas to avoid LED flashing",
        "Mode 4 best for persistent deer that adapt quickly"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format"
    },
    {
      step: 4,
      title: "Test the System",
      description: "Verify everything is working correctly",
      details: [
        "Walk in front of sensor from 10-15 feet away",
        "LED should flash when motion is detected",
        "Check detection angle by walking side to side",
        "Verify solar panel is receiving sunlight",
        "Confirm battery indicator shows charge"
      ],
      tips: [
        "Test during different times of day",
        "Have someone watch the LED while you move around",
        "Ultrasonic sound is inaudible - LED confirms activation"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format"
    },
    {
      step: 5,
      title: "Optimize Performance",
      description: "Fine-tune for maximum deer deterrent effectiveness",
      details: [
        "Monitor for deer activity in first few days",
        "Adjust angle if deer approach from different direction",
        "Consider adding second unit for larger areas",
        "Clean solar panel monthly for optimal charging",
        "Check and adjust settings seasonally"
      ],
      tips: [
        "Results typically seen within 1-3 days",
        "Move device if deer find alternate routes",
        "Winter: Brush snow off solar panel regularly"
      ],
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop&auto=format"
    }
  ];

  const placementTips = [
    {
      icon: MapPin,
      title: "Optimal Height",
      description: "Install 3-4 feet high for best deer detection",
      detail: "This height matches the typical eye level of adult deer, ensuring the sensor detects them reliably."
    },
    {
      icon: Sun,
      title: "Solar Exposure",
      description: "Ensure solar panel gets 4+ hours of direct sunlight daily",
      detail: "South-facing placement provides optimal charging. Even partial shade can reduce effectiveness."
    },
    {
      icon: Eye,
      title: "Clear Line of Sight", 
      description: "Remove obstacles between sensor and protected area",
      detail: "Ultrasonic waves travel in straight lines and cannot penetrate dense vegetation or solid objects."
    },
    {
      icon: Zap,
      title: "Detection Coverage",
      description: "Position for 110° coverage of the most vulnerable areas",
      detail: "Place at corners or edges to maximize coverage area while protecting the most important zones."
    }
  ];

  const commonMistakes = [
    {
      mistake: "Installing too low",
      solution: "Mount at 3-4 feet height for optimal deer detection",
      impact: "Low placement may miss deer or trigger on small animals unnecessarily"
    },
    {
      mistake: "Blocked solar panel",
      solution: "Ensure panel faces south with no overhanging branches",
      impact: "Poor charging leads to battery drain and device failure"
    },
    {
      mistake: "Obstructed sensor view",
      solution: "Clear vegetation and obstacles from sensor path",
      impact: "Reduced detection range and inconsistent activation"
    },
    {
      mistake: "Wrong working mode",
      solution: "Use Mode 3 (ultrasonic + LED) for maximum effectiveness",
      impact: "Single deterrent method may not be sufficient for persistent deer"
    }
  ];

  const maintenanceSchedule = [
    {
      frequency: "Weekly",
      tasks: ["Check for deer activity", "Verify LED activation during test walk"],
      icon: Clock
    },
    {
      frequency: "Monthly", 
      tasks: ["Clean solar panel with damp cloth", "Remove vegetation blocking sensor"],
      icon: Sun
    },
    {
      frequency: "Seasonally",
      tasks: ["Adjust angle for seasonal deer patterns", "Check mounting stability", "Test all working modes"],
      icon: Settings
    },
    {
      frequency: "As Needed",
      tasks: ["Brush snow off solar panel in winter", "Reposition if deer find alternate routes"],
      icon: Wrench
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-green-600">Home</a>
            <span>/</span>
            <span className="text-gray-900">Installation Guide</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Installation Guide
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Professional setup instructions for your solar-powered deer repellent. 
            Complete installation in just 5 minutes with no tools required.
          </p>
          <div className="flex items-center justify-center space-x-8 text-green-600 font-medium">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>5 Minutes Setup</span>
            </div>
            <div className="flex items-center">
              <Wrench className="h-5 w-5 mr-2" />
              <span>No Tools Required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Everything Included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Installation */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Step-by-Step Installation</h2>
            <p className="text-xl text-gray-600">Follow these simple steps for optimal deer deterrent performance</p>
          </div>

          <div className="space-y-16">
            {installationSteps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Instructions:</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Pro Tips:</h4>
                    <ul className="space-y-1">
                      {step.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-blue-800 text-sm">
                          • {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <Image
                      src={step.image}
                      alt={`Step ${step.step}: ${step.title}`}
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-lg"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Optimal Placement Tips</h2>
            <p className="text-xl text-gray-600">Critical factors for maximum deer deterrent effectiveness</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="bg-green-100 rounded-lg p-3 w-fit mb-4">
                  <tip.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-700 mb-3">{tip.description}</p>
                <p className="text-sm text-gray-600">{tip.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Avoid Common Mistakes</h2>
            <p className="text-xl text-gray-600">Learn from others' experiences for optimal results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonMistakes.map((item, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-900 mb-2">Mistake: {item.mistake}</h3>
                    <p className="text-red-800 mb-3">{item.impact}</p>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-900 mb-1">Solution:</h4>
                      <p className="text-green-800">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Maintenance Schedule</h2>
            <p className="text-xl text-gray-600">Keep your deer repellent working at peak performance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintenanceSchedule.map((schedule, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-lg p-2 mr-3">
                    <schedule.icon className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{schedule.frequency}</h3>
                </div>
                <ul className="space-y-2">
                  {schedule.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Additional Help?</h2>
            <p className="text-xl text-green-100 mb-8">
              Our customer support team and comprehensive FAQ section are here to ensure 
              your deer repellent installation is successful and effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/faq" 
                className="px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                View FAQ
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="mailto:support@rodentlab.com" 
                className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-green-500 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Install Your Deer Protection?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Everything you need is included. Professional installation in just 5 minutes 
            with our step-by-step guide and 30-day guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
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

          <div className="mt-8 flex items-center justify-center space-x-8 text-green-100">
            <div className="flex items-center">
              <Wrench className="h-5 w-5 mr-2" />
              <span className="text-sm">No Tools Required</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span className="text-sm">5-Minute Setup</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="text-sm">Everything Included</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}