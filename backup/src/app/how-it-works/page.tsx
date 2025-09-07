import type { Metadata } from 'next';
import Image from 'next/image';
import { Volume2, Sun, Zap, Shield, Eye, Waves, Brain, Leaf, ArrowRight, CheckCircle } from 'lucide-react';
import CTAButton from '@/components/UI/CTAButton';

export const metadata: Metadata = {
  title: 'How It Works - Solar Deer Repellent Technology Explained',
  description: 'Understand the science behind our 25kHz ultrasonic deer repellent. Learn how solar power, motion detection, and frequency technology protect your garden.',
  keywords: [
    'ultrasonic deer repellent how it works',
    'deer deterrent technology',
    '25kHz frequency explanation',
    'solar deer repellent science',
    'motion sensor deer control'
  ],
  openGraph: {
    title: 'The Science Behind Solar Deer Repellent Technology',
    description: 'Discover how ultrasonic frequencies, solar power, and smart sensors work together for effective deer control.',
  },
};

export default function HowItWorksPage() {
  const workingPrinciples = [
    {
      icon: Eye,
      title: "Motion Detection",
      description: "PIR sensor detects deer movement",
      details: [
        "Passive infrared (PIR) technology detects body heat differences",
        "110° detection angle covers wide area",
        "30-foot detection range optimized for deer size",
        "Response time under 0.5 seconds for immediate activation"
      ],
      technical: "The PIR sensor uses pyroelectric material that generates electrical signals when infrared radiation (body heat) changes within its field of view."
    },
    {
      icon: Volume2,
      title: "Ultrasonic Emission",
      description: "25kHz frequency disrupts deer behavior",
      details: [
        "Frequency specifically calibrated for deer hearing sensitivity",
        "Sound pressure level: 90-100 decibels at source",
        "Inaudible to humans (hearing range typically 20Hz-20kHz)",
        "Variable frequency prevents habituation"
      ],
      technical: "Deer hearing range extends to 30kHz, making 25kHz frequency uncomfortable but not harmful, similar to how high-pitched sounds affect humans."
    },
    {
      icon: Zap,
      title: "LED Flash Deterrent",
      description: "Bright light adds visual intimidation",
      details: [
        "High-intensity white LED creates startling effect",
        "Particularly effective during dawn/dusk feeding times",
        "Flash duration 2-3 seconds to maximize impact",
        "Combined with ultrasonic for multi-sensory deterrent"
      ],
      technical: "Sudden bright light triggers deer's flight response, as it simulates potential predator presence or human activity."
    },
    {
      icon: Sun,
      title: "Solar Power System",
      description: "Continuous operation without maintenance",
      details: [
        "6V/2W polycrystalline solar panel",
        "2000mAh lithium-ion battery backup",
        "Intelligent power management optimizes battery life",
        "Works even during extended cloudy periods"
      ],
      technical: "Advanced MPPT (Maximum Power Point Tracking) ensures optimal energy harvest from solar panel under varying light conditions."
    }
  ];

  const scienceExplanation = [
    {
      title: "Why 25kHz Frequency?",
      content: "Research shows deer hearing is most sensitive between 1-30kHz, with peak sensitivity around 8-16kHz. Our 25kHz frequency is high enough to be uncomfortable for deer while remaining completely inaudible to humans. This frequency creates an 'acoustic barrier' that deer naturally avoid.",
      icon: Waves,
      facts: [
        "Human hearing: 20Hz - 20kHz",
        "Deer hearing: 0.25Hz - 30kHz", 
        "Optimal deterrent range: 20-25kHz",
        "Sound travels 343 meters per second"
      ]
    },
    {
      title: "Motion Detection Science",
      content: "PIR sensors detect changes in infrared radiation (heat signatures). When a deer enters the detection zone, its body heat contrasts with the background temperature, triggering the sensor. The 110° angle and 30-foot range are optimized for deer body size and typical approach patterns.",
      icon: Eye,
      facts: [
        "Detection angle: 110 degrees",
        "Range: Up to 30 feet",
        "Trigger sensitivity: ±2°C temperature difference",
        "Response time: <0.5 seconds"
      ]
    },
    {
      title: "Solar Efficiency",
      content: "The 6V/2W solar panel generates enough power to operate the device continuously. Even with just 4 hours of sunlight, the system can run for 7+ days. The 2000mAh battery provides backup power for extended cloudy periods or winter conditions.",
      icon: Sun,
      facts: [
        "Panel efficiency: >18%",
        "Daily energy need: ~0.5Wh",
        "Battery capacity: 7.4Wh",
        "Cloudy day operation: 30+ days"
      ]
    }
  ];

  const effectivenessFactors = [
    {
      factor: "Frequency Targeting",
      description: "25kHz frequency specifically chosen for deer auditory sensitivity",
      effectiveness: "95%",
      color: "green"
    },
    {
      factor: "Multi-Modal Deterrent", 
      description: "Combination of sound, light, and motion creates comprehensive barrier",
      effectiveness: "92%",
      color: "blue"
    },
    {
      factor: "Immediate Response",
      description: "Sub-second activation prevents deer from becoming comfortable",
      effectiveness: "88%",
      color: "purple"
    },
    {
      factor: "Consistent Operation",
      description: "Solar power ensures 24/7 protection without maintenance",
      effectiveness: "94%",
      color: "yellow"
    }
  ];

  const comparisonMethods = [
    {
      method: "Chemical Repellents",
      pros: ["Easy to apply", "Immediate coverage"],
      cons: ["Wash off in rain", "Need frequent reapplication", "Chemical exposure", "Expensive ongoing cost"],
      effectiveness: "60-70%",
      maintenance: "High"
    },
    {
      method: "Physical Fencing",
      pros: ["100% physical barrier", "Permanent solution"],
      cons: ["High installation cost", "Blocks views", "Maintenance required", "Not practical for large areas"],
      effectiveness: "95%",
      maintenance: "Medium"
    },
    {
      method: "Ultrasonic Repellent",
      pros: ["Humane and safe", "Zero ongoing costs", "Weather resistant", "Covers large areas"],
      cons: ["Initial setup required", "Needs clear line of sight"],
      effectiveness: "90-95%",
      maintenance: "Very Low"
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
            <span className="text-gray-900">How It Works</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Discover the science behind our solar-powered ultrasonic deer repellent. 
            Advanced technology creates an effective, humane barrier that deer naturally avoid.
          </p>
          <div className="flex items-center justify-center space-x-8 text-green-600 font-medium">
            <div className="flex items-center">
              <Waves className="h-5 w-5 mr-2" />
              <span>25kHz Ultrasonic</span>
            </div>
            <div className="flex items-center">
              <Brain className="h-5 w-5 mr-2" />
              <span>Science-Based</span>
            </div>
            <div className="flex items-center">
              <Leaf className="h-5 w-5 mr-2" />
              <span>100% Humane</span>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process Animation */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Complete Process</h2>
            <p className="text-xl text-gray-600">From detection to deterrence in under half a second</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workingPrinciples.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600 mb-4">{principle.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-4 text-left">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {principle.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-800 italic">{principle.technical}</p>
                </div>

                {index < workingPrinciples.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-green-600 mx-auto mt-6 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Explanation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Science Behind the Technology</h2>
            <p className="text-xl text-gray-600">Research-backed principles ensure maximum effectiveness</p>
          </div>

          <div className="space-y-12">
            {scienceExplanation.map((science, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 rounded-lg p-3 mr-4">
                      <science.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{science.title}</h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{science.content}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {science.facts.map((fact, factIndex) => (
                      <div key={factIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-sm text-gray-600">{fact}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                    <science.icon className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Insight</h4>
                    <p className="text-gray-600 text-sm">
                      {science.title.includes("Frequency") && "Optimal frequency selection based on deer auditory research"}
                      {science.title.includes("Motion") && "PIR technology provides reliable, weather-resistant detection"}
                      {science.title.includes("Solar") && "Advanced power management ensures continuous operation"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Effectiveness Metrics */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Effectiveness</h2>
            <p className="text-xl text-gray-600">Multiple factors contribute to 95% success rate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {effectivenessFactors.map((factor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{factor.factor}</h3>
                  <div className={`text-2xl font-bold ${
                    factor.color === 'green' ? 'text-green-600' :
                    factor.color === 'blue' ? 'text-blue-600' :
                    factor.color === 'purple' ? 'text-purple-600' :
                    'text-yellow-600'
                  }`}>
                    {factor.effectiveness}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{factor.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${
                      factor.color === 'green' ? 'bg-green-600' :
                      factor.color === 'blue' ? 'bg-blue-600' :
                      factor.color === 'purple' ? 'bg-purple-600' :
                      'bg-yellow-600'
                    }`}
                    style={{ width: factor.effectiveness }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare Deer Control Methods</h2>
            <p className="text-xl text-gray-600">See why ultrasonic technology is the superior choice</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Method</th>
                  <th className="px-6 py-4 text-center font-semibold">Effectiveness</th>
                  <th className="px-6 py-4 text-center font-semibold">Maintenance</th>
                  <th className="px-6 py-4 text-left font-semibold">Pros</th>
                  <th className="px-6 py-4 text-left font-semibold">Cons</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonMethods.map((method, index) => (
                  <tr key={index} className={index === 2 ? 'bg-green-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {method.method}
                      {index === 2 && (
                        <span className="ml-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs">RECOMMENDED</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`font-semibold ${
                        method.effectiveness.includes('95') ? 'text-green-600' :
                        method.effectiveness.includes('90') ? 'text-green-600' :
                        method.effectiveness.includes('60') ? 'text-yellow-600' : 'text-green-600'
                      }`}>
                        {method.effectiveness}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`font-semibold ${
                        method.maintenance === 'Very Low' ? 'text-green-600' :
                        method.maintenance === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {method.maintenance}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <ul className="text-sm text-gray-700 space-y-1">
                        {method.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4">
                      <ul className="text-sm text-gray-700 space-y-1">
                        {method.cons.map((con, conIndex) => (
                          <li key={conIndex} className="flex items-start">
                            <div className="w-3 h-3 border border-red-400 rounded-sm mr-2 mt-0.5 flex-shrink-0"></div>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Experience the Science in Action
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Advanced ultrasonic technology, solar power, and smart sensors work together 
            to create the most effective and humane deer control solution available.
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
              <Brain className="h-5 w-5 mr-2" />
              <span className="text-sm">Science-Based Design</span>
            </div>
            <div className="flex items-center">
              <Leaf className="h-5 w-5 mr-2" />
              <span className="text-sm">100% Humane</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="text-sm">95% Effective</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}