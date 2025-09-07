import type { Metadata } from 'next';
import Image from 'next/image';
import { Shield, Sun, Droplets, Volume2, Clock, CheckCircle, Star, ArrowRight, Package, Zap, Thermometer } from 'lucide-react';
import CTAButton from '@/components/UI/CTAButton';

export const metadata: Metadata = {
  title: 'Solar Deer Repellent - Product Details & Specifications',
  description: 'Complete specifications for our solar-powered ultrasonic deer repellent. 25kHz frequency, 30ft range, IP65 waterproof, motion-activated. Starting at $49.99.',
  keywords: [
    'deer repellent specifications',
    'ultrasonic deer deterrent specs',
    'solar deer repellent features',
    'motion activated deer control',
    'weatherproof deer repellent'
  ],
  openGraph: {
    title: 'Solar Deer Repellent - Complete Product Specifications',
    description: 'Advanced ultrasonic technology with solar power. 95% effective deer deterrent.',
    images: ['/images/product-details-og.jpg'],
  },
};

export default function ProductPage() {
  const productFeatures = [
    {
      icon: Volume2,
      title: 'Ultrasonic Technology',
      description: '25kHz frequency specifically calibrated to deter deer while being inaudible to humans',
      specs: ['Frequency: 25kHz ±2kHz', 'Sound pressure: 90-100dB', 'Effective range: 30 feet']
    },
    {
      icon: Sun,
      title: 'Solar Powered',
      description: 'High-efficiency solar panel with backup battery for continuous operation',
      specs: ['Solar panel: 6V/2W polycrystalline', 'Battery: 3.7V 2000mAh Li-ion', 'Charging time: 4-6 hours']
    },
    {
      icon: Shield,
      title: 'Motion Detection',
      description: 'Advanced PIR sensor detects movement with precision and reliability',
      specs: ['Detection angle: 110°', 'Detection range: 30 feet', 'Response time: <0.5 seconds']
    },
    {
      icon: Droplets,
      title: 'Weatherproof Design',
      description: 'IP65 rated protection against rain, snow, and extreme weather conditions',
      specs: ['Waterproof rating: IP65', 'Operating temp: -20°C to +60°C', 'Material: UV-resistant ABS']
    },
    {
      icon: Clock,
      title: '24/7 Operation',
      description: 'Continuous protection with intelligent power management',
      specs: ['Battery life: 30+ days', 'Standby current: <1mA', 'Working modes: 5 adjustable']
    },
    {
      icon: Zap,
      title: 'LED Flash Deterrent',
      description: 'Bright LED flash provides additional visual deterrent especially effective at night',
      specs: ['LED type: High-power white LED', 'Flash duration: 2-3 seconds', 'Flash patterns: 3 modes']
    }
  ];

  const technicalSpecs = [
    { label: 'Ultrasonic Frequency', value: '25kHz ±2kHz' },
    { label: 'Detection Range', value: '30 feet (9 meters)' },
    { label: 'Detection Angle', value: '110 degrees' },
    { label: 'Solar Panel', value: '6V/2W Polycrystalline' },
    { label: 'Battery Capacity', value: '3.7V 2000mAh Li-ion' },
    { label: 'Waterproof Rating', value: 'IP65' },
    { label: 'Operating Temperature', value: '-20°C to +60°C (-4°F to 140°F)' },
    { label: 'Material', value: 'UV-resistant ABS Plastic' },
    { label: 'Dimensions', value: '5.1" × 3.5" × 2.4" (13×9×6 cm)' },
    { label: 'Weight', value: '1.2 lbs (550g)' },
    { label: 'Working Modes', value: '5 Adjustable Settings' },
    { label: 'Installation', value: 'Ground stake or wall mount' },
  ];

  const packageContents = [
    'Solar Deer Repellent Device',
    'Ground Mounting Stake',
    'Wall Mounting Bracket',
    'USB Charging Cable (backup)',
    'User Manual & Installation Guide',
    'Warranty Card'
  ];

  const workingModes = [
    {
      mode: 'Mode 1',
      description: 'Ultrasonic only - Silent operation for urban areas',
      animals: 'Small animals, cats, dogs'
    },
    {
      mode: 'Mode 2', 
      description: 'LED flash only - Visual deterrent without sound',
      animals: 'Birds, larger animals'
    },
    {
      mode: 'Mode 3',
      description: 'Ultrasonic + LED flash - Maximum effectiveness',
      animals: 'Deer, raccoons, skunks'
    },
    {
      mode: 'Mode 4',
      description: 'Random activation - Prevents habituation',
      animals: 'All wildlife'
    },
    {
      mode: 'Mode 5',
      description: '24/7 activation - Continuous protection',
      animals: 'Persistent problem animals'
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
            <span className="text-gray-900">Product Details</span>
          </nav>
        </div>
      </div>

      {/* Product Hero Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&auto=format"
                  alt="Solar Deer Repellent - Main Product View"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                    <Image
                      src={`https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=150&h=150&fit=crop&auto=format&q=80`}
                      alt={`Product view ${i}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Solar Powered Ultrasonic Deer Repellent
                </h1>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">4.8/5 (127+ Reviews)</span>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Professional-grade deer deterrent using 25kHz ultrasonic technology with solar power. 
                  Motion-activated protection covers up to 30 feet with 110° detection angle.
                </p>
              </div>

              {/* Key Features */}
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>95% Success Rate - Scientifically Proven</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Zero Operating Costs - Solar Powered</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Humane & Safe - No Harm to Animals</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Weather Resistant - IP65 Rated</span>
                  </div>
                </div>
              </div>

              {/* Pricing Options */}
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Your Package</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors">
                    <div>
                      <div className="font-semibold text-gray-900">Single Pack</div>
                      <div className="text-sm text-gray-600">Perfect for small gardens</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">$49.99</div>
                      <CTAButton variant="single" className="mt-2" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg bg-yellow-50">
                    <div>
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-900">Double Pack</span>
                        <span className="ml-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium">SAVE $20</span>
                      </div>
                      <div className="text-sm text-gray-600">Best value for larger properties</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 line-through">$99.98</div>
                      <div className="text-2xl font-bold text-gray-900">$79.99</div>
                      <CTAButton variant="double" className="mt-2 bg-yellow-600 hover:bg-yellow-700" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-between py-4 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-600">
                  <Package className="h-4 w-4 mr-2" />
                  <span>Free USA Shipping</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>2-Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600">Professional-grade components for reliable performance</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Complete Specifications</h3>
              <div className="space-y-4">
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-gray-900 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Package Contents</h3>
              <div className="space-y-3">
                {packageContents.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Installation Ready</h4>
                <p className="text-sm text-green-800">
                  Everything you need is included. No additional tools or parts required. 
                  Setup takes less than 5 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Features</h2>
            <p className="text-xl text-gray-600">Cutting-edge technology for maximum effectiveness</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="text-sm text-gray-600 flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Modes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 Working Modes</h2>
            <p className="text-xl text-gray-600">Customize protection for different animals and situations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workingModes.map((mode, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 ml-3">{mode.mode}</h3>
                </div>
                <p className="text-gray-700 mb-3">{mode.description}</p>
                <div className="text-sm text-green-600 font-medium">
                  Best for: {mode.animals}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Protect Your Garden?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Join thousands of satisfied customers. Start protecting your garden today with our 
            30-day money-back guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton 
              variant="single" 
              size="large" 
              className="!bg-white !text-green-600 hover:!bg-gray-100 hover:!text-green-700 font-bold" 
            >
              Buy Single Pack - $49.99
            </CTAButton>
            <CTAButton 
              variant="double" 
              size="large" 
              className="!bg-yellow-500 hover:!bg-yellow-600 !text-white font-bold" 
            >
              Buy Double Pack - $79.99 (Save $20!)
            </CTAButton>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-8 text-green-100">
            <div className="flex items-center">
              <Package className="h-5 w-5 mr-2" />
              <span className="text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span className="text-sm">30-Day Guarantee</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="text-sm">2-Year Warranty</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}