import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Sun, Droplets, Volume2, Clock, CheckCircle, Star, Package, Zap } from 'lucide-react';
import CTAButton from '@/components/UI/CTAButton';

export const metadata: Metadata = {
  title: 'SolarGuard Pro - Solar Deer Repellent Product Details & Specifications',
  description: 'Complete specifications for our solar-powered ultrasonic deer repellent. 25kHz frequency, 30ft range, IP65 waterproof, motion-activated. Starting at $49.99.',
  keywords: [
    'deer repellent specifications',
    'ultrasonic deer deterrent specs',
    'solar deer repellent features',
    'motion activated deer control',
    'weatherproof deer repellent'
  ],
  openGraph: {
    title: 'SolarGuard Pro - Complete Product Specifications',
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
    'SolarGuard Pro Device',
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

  const productImages = [
    {
      src: "https://m.media-amazon.com/images/I/818jcIp9unL._AC_SL1500_.jpg",
      alt: "SolarGuard Pro - Main Product View"
    },
    {
      src: "https://m.media-amazon.com/images/I/611uHxLa-+L._AC_SL1500_.jpg",
      alt: "SolarGuard Pro - Side View with Solar Panel"
    },
    {
      src: "https://m.media-amazon.com/images/I/71bu2rzD3qL._AC_SL1500_.jpg",
      alt: "SolarGuard Pro - Installation Setup"
    },
    {
      src: "https://m.media-amazon.com/images/I/71p01uYnUiL._AC_SL1500_.jpg",
      alt: "SolarGuard Pro - Garden Protection"
    },
    {
      src: "https://m.media-amazon.com/images/I/81421IaGHiL._AC_SL1500_.jpg",
      alt: "SolarGuard Pro - Technical Components"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Product Details</span>
          </nav>
        </div>
      </div>

      {/* Product Hero Section */}
      <section className="py-6 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-3 sm:space-y-4">
              <div className="aspect-square bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden">
                <Image
                  src="https://m.media-amazon.com/images/I/818jcIp9unL._AC_SL1500_.jpg"
                  alt="SolarGuard Pro - Main Product View"
                  width={600}
                  height={600}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                  <Image
                    src="https://m.media-amazon.com/images/I/611uHxLa-+L._AC_SL1500_.jpg"
                    alt="SolarGuard Pro - Side View with Solar Panel"
                    width={150}
                    height={150}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                  <Image
                    src="https://m.media-amazon.com/images/I/71bu2rzD3qL._AC_SL1500_.jpg"
                    alt="SolarGuard Pro - Installation Setup"
                    width={150}
                    height={150}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                  <Image
                    src="https://m.media-amazon.com/images/I/71p01uYnUiL._AC_SL1500_.jpg"
                    alt="SolarGuard Pro - Garden Protection"
                    width={150}
                    height={150}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                  <Image
                    src="https://m.media-amazon.com/images/I/81421IaGHiL._AC_SL1500_.jpg"
                    alt="SolarGuard Pro - Technical Components"
                    width={150}
                    height={150}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  SolarGuard Pro - Ultrasonic Deer Repellent
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4 sm:mb-6">
                  <div className="flex text-yellow-400 mb-2 sm:mb-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm sm:text-base text-gray-600">4.8/5 (127+ Reviews)</span>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Professional-grade deer deterrent using 25kHz ultrasonic technology with solar power. 
                  Motion-activated protection covers up to 30 feet with 110° detection angle.
                </p>
              </div>

              {/* Key Features */}
              <div className="bg-green-50 rounded-xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Key Benefits</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">95% Success Rate - Scientifically Proven</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Zero Operating Costs - Solar Powered</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Humane & Safe - No Harm to Animals</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Weather Resistant - IP65 Rated</span>
                  </div>
                </div>
              </div>

              {/* Pricing Options */}
              <div className="border border-gray-200 rounded-xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Choose Your Package</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors">
                    <div className="mb-3 sm:mb-0">
                      <div className="font-semibold text-gray-900">Single Pack</div>
                      <div className="text-xs sm:text-sm text-gray-600">Perfect for small gardens</div>
                    </div>
                    <div className="flex items-center justify-between sm:text-right sm:block">
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">$49.99</div>
                      <CTAButton variant="single" className="text-sm sm:text-base ml-4 sm:ml-0 sm:mt-2" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 border-2 border-yellow-400 rounded-lg bg-yellow-50">
                    <div className="mb-3 sm:mb-0">
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <span className="font-semibold text-gray-900">Double Pack</span>
                        <span className="mt-1 sm:mt-0 sm:ml-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium inline-block w-fit">SAVE $20</span>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">Best value for larger properties</div>
                    </div>
                    <div className="flex items-center justify-between sm:text-right sm:block">
                      <div>
                        <div className="text-xs sm:text-sm text-gray-500 line-through">$99.98</div>
                        <div className="text-xl sm:text-2xl font-bold text-gray-900">$79.99</div>
                      </div>
                      <CTAButton variant="double" className="text-sm sm:text-base bg-yellow-600 hover:bg-yellow-700 ml-4 sm:ml-0 sm:mt-2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 sm:py-4 border-t border-gray-200 space-y-2 sm:space-y-0">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Package className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  <span>Free USA Shipping</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  <span>2-Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Technical Specifications</h2>
            <p className="text-base sm:text-xl text-gray-600">Professional-grade components for reliable performance</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Complete Specifications</h3>
              <div className="space-y-3 sm:space-y-4">
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between py-2 sm:py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-700 text-sm sm:text-base">{spec.label}</span>
                    <span className="text-gray-900 text-sm sm:text-base mt-1 sm:mt-0 sm:text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Package Contents</h3>
              <div className="space-y-2 sm:space-y-3">
                {packageContents.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">Installation Ready</h4>
                <p className="text-xs sm:text-sm text-green-800">
                  Everything you need is included. No additional tools or parts required. 
                  Setup takes less than 5 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Advanced Features</h2>
            <p className="text-base sm:text-xl text-gray-600">Cutting-edge technology for maximum effectiveness</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-green-100 rounded-lg p-2 sm:p-3">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 ml-3 sm:ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                <div className="space-y-1 sm:space-y-2">
                  {feature.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="text-xs sm:text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
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
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">5 Working Modes</h2>
            <p className="text-base sm:text-xl text-gray-600">Customize protection for different animals and situations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {workingModes.map((mode, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 ml-2 sm:ml-3">{mode.mode}</h3>
                </div>
                <p className="text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">{mode.description}</p>
                <div className="text-xs sm:text-sm text-green-600 font-medium">
                  Best for: {mode.animals}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            Ready to Protect Your Garden?
          </h2>
          <p className="text-base sm:text-xl text-green-100 mb-8 sm:mb-10">
            Join thousands of satisfied customers. Start protecting your garden today with our 
            30-day money-back guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <CTAButton 
              variant="single" 
              size="large" 
              className="!bg-white !text-green-600 hover:!bg-gray-100 hover:!text-green-700 font-bold text-sm sm:text-base" 
            >
              Buy Single Pack - $49.99
            </CTAButton>
            <CTAButton 
              variant="double" 
              size="large" 
              className="!bg-yellow-500 hover:!bg-yellow-600 !text-white font-bold text-sm sm:text-base" 
            >
              Buy Double Pack - $79.99 (Save $20!)
            </CTAButton>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-center sm:space-x-8 space-y-3 sm:space-y-0 text-green-100">
            <div className="flex items-center justify-center sm:justify-start">
              <Package className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="text-xs sm:text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="text-xs sm:text-sm">30-Day Guarantee</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="text-xs sm:text-sm">2-Year Warranty</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}