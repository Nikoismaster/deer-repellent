import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Heart, Leaf, Users, Award, Target } from 'lucide-react';
import CTAButton from '@/components/UI/CTAButton';

export const metadata: Metadata = {
  title: 'About DeerRepellent.store - Professional Wildlife Control Solutions',
  description: 'Learn about our mission to provide effective, humane deer control solutions. Trusted by thousands of gardeners across America.',
  openGraph: {
    title: 'About DeerRepellent.store - Professional Wildlife Control',
    description: 'Effective, humane deer control solutions trusted by thousands of gardeners.',
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Humane Solutions',
      description: 'We believe in protecting gardens without harming wildlife. Our ultrasonic technology provides effective deterrence while keeping animals safe.'
    },
    {
      icon: Leaf,
      title: 'Environmental Responsibility',
      description: 'Solar-powered, chemical-free solutions that protect your garden while preserving the environment for future generations.'
    },
    {
      icon: Shield,
      title: 'Proven Effectiveness',
      description: 'Our products are backed by scientific research and real-world testing, delivering 95% success rates for our customers.'
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Over 10,000 satisfied customers trust our solutions to protect their gardens, landscaping, and agricultural investments.'
    }
  ];

  const achievements = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '95%', label: 'Success Rate' },
    { number: '50+', label: 'States Served' },
    { number: '5★', label: 'Average Rating' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900">About</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About DeerRepellent.store
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            We&apos;re dedicated to providing effective, humane wildlife control solutions 
            that protect your garden while respecting nature.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To empower gardeners and property owners with innovative, science-based solutions 
              that effectively deter deer while maintaining the natural balance of our ecosystems. 
              We believe that protecting your investment shouldn&apos;t come at the expense of wildlife welfare.
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center justify-center mb-6">
              <Target className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              A world where beautiful gardens and thriving wildlife coexist harmoniously, 
              supported by technology that respects both human needs and animal welfare.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-600">Our track record speaks for itself</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-700 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Solutions?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Science-Based Technology</h3>
                    <p className="text-gray-700">Our ultrasonic frequency selection is based on extensive research into deer auditory sensitivity and behavior patterns.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-700">Over 10,000 customers have successfully protected their gardens with our deer repellent systems.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Heart className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Humane Approach</h3>
                    <p className="text-gray-700">We never harm animals - our technology simply encourages deer to find food sources elsewhere.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Leaf className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Eco-Friendly Design</h3>
                    <p className="text-gray-700">Solar-powered operation means zero ongoing environmental impact and no electricity costs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Commitment to You</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-3"></div>
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-3"></div>
                  <span>2-year product warranty</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-3"></div>
                  <span>Free customer support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-3"></div>
                  <span>Free shipping across USA</span>
                </div>
              </div>
              
              <CTAButton 
                variant="single" 
                className="!bg-white !text-green-600 hover:!bg-gray-100 hover:!text-green-700 font-bold w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Have questions about our products or need help choosing the right solution? 
            Our expert team is here to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Support</h3>
              <div className="space-y-2 text-gray-700">
                <p>Email: support@rodentlab.com</p>
                <p>Phone: 1-800-DEER-AWAY</p>
                <p>Hours: Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Support</h3>
              <div className="space-y-2 text-gray-700">
                <p>Installation help available</p>
                <p>Product troubleshooting</p>
                <p>Warranty claims processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}