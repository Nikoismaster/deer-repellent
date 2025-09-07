import Link from 'next/link';
import { Shield, Sun, Droplets, Volume2, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';
import CTAButton from '@/components/UI/CTAButton';

export default function HomePage() {
  const features = [
    {
      icon: Volume2,
      title: 'Ultrasonic Technology',
      description: '25kHz frequency specifically designed to deter deer and other wildlife without disturbing humans or pets'
    },
    {
      icon: Sun,
      title: 'Solar Powered',
      description: 'Eco-friendly solar panel with 2000mAh backup battery ensures 24/7 operation with zero electricity costs'
    },
    {
      icon: Droplets,
      title: 'Weatherproof Design',
      description: 'IP65 waterproof rating withstands rain, snow, and extreme weather conditions year-round'
    },
    {
      icon: Shield,
      title: 'Motion Activated',
      description: 'PIR sensor detects movement up to 30 feet away with 110° detection angle for maximum coverage'
    },
    {
      icon: Clock,
      title: '24/7 Protection',
      description: 'Works continuously day and night to protect your garden, lawn, and landscaping from deer damage'
    },
    {
      icon: CheckCircle,
      title: 'Humane & Safe',
      description: 'Completely safe for children, pets, and wildlife - just encourages deer to find food elsewhere'
    }
  ];

  const workingProcess = [
    {
      step: '1',
      title: 'Motion Detection',
      description: 'PIR sensor detects deer movement within 30-foot radius'
    },
    {
      step: '2', 
      title: 'Instant Activation',
      description: 'Device immediately emits 25kHz ultrasonic sound waves'
    },
    {
      step: '3',
      title: 'Deer Deterrence',
      description: 'Uncomfortable frequency causes deer to leave the area immediately'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Vermont',
      rating: 5,
      comment: 'Finally! No more destroyed vegetables. This device saved my entire garden.',
      result: '95% reduction in deer damage'
    },
    {
      name: 'Mike R.',
      location: 'Colorado',
      rating: 5,
      comment: 'Easy installation and it works exactly as advertised. Deer stay away now.',
      result: 'Complete protection for 3 months'
    },
    {
      name: 'Jennifer L.',
      location: 'Pennsylvania',
      rating: 5,
      comment: 'Bought 2 units for my large property. Worth every penny for the peace of mind.',
      result: '100% deer-free zone'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Protect Your Garden{' '}
                <span className="text-green-600">24/7</span> with Solar-Powered Deer Repellent
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mt-4 sm:mt-6 leading-relaxed">
                Effective, humane & eco-friendly wildlife control. Our ultrasonic deer deterrent 
                uses solar power and motion activation to keep deer away from your plants naturally.
              </p>
              
              {/* Key Benefits */}
              <div className="mt-6 sm:mt-8 space-y-3">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span>95% Success Rate - Proven Effective</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span>Solar Powered - Zero Operating Costs</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span>Humane & Safe for Pets and Children</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
                <CTAButton variant="single" size="large" />
                <CTAButton variant="double" size="large" className="bg-yellow-600 hover:bg-yellow-700" />
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-700 font-medium text-sm sm:text-base">4.8/5 (127+ Reviews)</span>
                </div>
                <div className="text-gray-700 text-sm sm:text-base">
                  <span className="font-medium">Free USA Shipping</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* 主产品图片 */}
                <img 
                  src="https://m.media-amazon.com/images/I/818jcIp9unL._AC_SL1500_.jpg"
                  alt="Solar Powered Deer Repellent Device"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-lg shadow-lg p-3 sm:p-4">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-green-600">30 Day</div>
                    <div className="text-xs sm:text-sm text-gray-700">Money Back Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Deer Repellent?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology meets eco-friendly design for the most effective deer control solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Simple 3-step process for effective deer deterrence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workingProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-700">{process.description}</p>
                {index < workingProcess.length - 1 && (
                  <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 mx-auto mt-6 sm:mt-8 hidden md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <Link 
              href="/how-it-works"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
            >
              Learn more about the technology
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Technical Specifications
              </h2>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Ultrasonic Frequency</span>
                    <span className="text-gray-700">25kHz</span>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Detection Range</span>
                    <span className="text-gray-700">30 feet (9 meters)</span>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Detection Angle</span>
                    <span className="text-gray-700">110 degrees</span>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Waterproof Rating</span>
                    <span className="text-gray-700">IP65</span>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Power Source</span>
                    <span className="text-gray-700">Solar + 2000mAh Battery</span>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Working Modes</span>
                    <span className="text-gray-700">5 Adjustable Settings</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/product"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                >
                  View detailed product specifications
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              {/* 技术图表 */}
              <div className="relative w-full max-w-md sm:max-w-lg mx-auto rounded-2xl overflow-hidden shadow-lg bg-white p-4">
                <img 
                  src="https://m.media-amazon.com/images/I/81421IaGHiL._AC_SL1500_.jpg"
                  alt="Deer Repellent Technical Specifications and Components"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Customers
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Join thousands of satisfied gardeners who protect their plants with our deer repellent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  &quot;{testimonial.comment}&quot;
                </blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.location}</div>
                  <div className="text-green-600 font-medium text-sm mt-2">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link 
              href="/success-stories"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
            >
              Read more success stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Protect Your Garden?
          </h2>
          <p className="text-lg sm:text-xl text-green-100 mb-8 sm:mb-10">
            Join thousands of satisfied customers and start protecting your garden today. 
            30-day money-back guarantee and free shipping included.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
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

          <div className="mt-6 sm:mt-8 text-green-100">
            <p className="text-xs sm:text-sm">
              ✓ Free USA Shipping • ✓ 30-Day Money Back Guarantee • ✓ 24/7 Customer Support
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}