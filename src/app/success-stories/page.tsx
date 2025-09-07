import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Star, MapPin, Calendar, CheckCircle, Quote, ArrowRight, TrendingUp } from 'lucide-react';
import CTAButton from '@/components/UI/CTAButton';

export const metadata: Metadata = {
  title: 'Customer Success Stories - UltraSonic Solar Deer Repellent Results',
  description: 'Real customer success stories and results from using UltraSonic Solar Deer Repellent. See how our customers achieved 95% deer damage reduction.',
  keywords: [
    'deer repellent success stories',
    'customer testimonials deer control',
    'garden protection results',
    'deer deterrent reviews',
    'wildlife control testimonials'
  ],
  openGraph: {
    title: 'Real Customer Success Stories - UltraSonic Solar Deer Repellent',
    description: 'Discover how thousands of customers successfully protected their gardens with UltraSonic Solar Deer Repellent.',
    images: ['/images/success-stories-og.jpg'],
  },
};

export default function SuccessStoriesPage() {
  const featuredStories = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      location: 'Vermont',
      duration: '6 months',
      rating: 5,
      propertySize: '1/2 acre garden',
      problemBefore: 'Lost 80% of vegetable garden to deer every season',
      resultsAfter: '95% reduction in deer damage, first successful harvest in 5 years',
      quote: "I was skeptical at first, but the UltraSonic Solar Deer Repellent completely transformed my gardening experience. After years of frustration with destroyed vegetables, I finally have a thriving garden again. The deer that used to visit every night haven't been back since I installed it.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format",
      beforeAfter: {
        before: "Annual crop loss: $800+",
        after: "Annual crop loss: <$50"
      }
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      location: 'Colorado',
      duration: '8 months',
      rating: 5,
      propertySize: '2 acre property',
      problemBefore: 'Deer destroying expensive landscaping and fruit trees',
      resultsAfter: 'Complete protection, fruit trees producing for first time in 3 years',
      quote: "The installation was incredibly easy, and the results were immediate. Within a week, the deer stopped coming near our fruit trees. This year we had our first apple harvest in three years. The solar power means no ongoing costs - it just works.",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop&auto=format",
      beforeAfter: {
        before: "Landscaping replacement: $2,000/year",
        after: "Landscaping replacement: $0"
      }
    },
    {
      id: 3,
      name: 'Jennifer Liu',
      location: 'Pennsylvania',
      duration: '1 year',
      rating: 5,
      propertySize: '3 acre farm',
      problemBefore: 'Organic farm crops decimated by deer, losing $5,000+ annually',
      resultsAfter: '100% deer-free zones, increased crop yield by 300%',
      quote: "As an organic farmer, I needed a humane solution that wouldn't harm the environment. The UltraSonic Solar Deer Repellent was perfect. I bought 4 units to cover my entire property. Not only did it stop the deer damage, but my crops are thriving like never before.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop&auto=format",
      beforeAfter: {
        before: "Annual deer damage: $5,200",
        after: "Annual deer damage: $0"
      }
    }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      location: 'Montana',
      rating: 5,
      quote: "Works exactly as advertised. Deer used to eat everything in my backyard. Now they won't even come close. Great investment!",
      result: "90% damage reduction"
    },
    {
      name: 'Lisa Chen',
      location: 'Oregon',
      rating: 5,
      quote: "So easy to install and maintain. The solar panel keeps it running 24/7. Haven't seen a deer in my garden for 4 months straight.",
      result: "4 months deer-free"
    },
    {
      name: 'Robert Williams',
      location: 'New Hampshire',
      rating: 5,
      quote: "Tried everything else first - sprays, fencing, noise makers. This is the only thing that actually worked long-term.",
      result: "First effective solution"
    },
    {
      name: 'Maria Gonzalez',
      location: 'Texas',
      rating: 5,
      quote: "Worth every penny. My roses and vegetables are safe now. The ultrasonic technology really works without bothering our pets.",
      result: "Complete garden protection"
    },
    {
      name: 'John Anderson',
      location: 'Minnesota',
      rating: 5,
      quote: "Bought the double pack for my large property. Amazing results across the board. Deer damage went from constant to zero.",
      result: "Zero deer damage"
    },
    {
      name: 'Emily Foster',
      location: 'Virginia',
      rating: 5,
      quote: "Installation took 5 minutes. Results were visible within days. This device has saved my garden and my sanity!",
      result: "Instant peace of mind"
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Satisfied Customers' },
    { number: '95%', label: 'Success Rate' },
    { number: '50+', label: 'States Protected' },
    { number: '$2.8M', label: 'Crop Damage Prevented' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Success Stories</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Real Results from Real Customers
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Discover how thousands of gardeners, farmers, and homeowners have successfully protected 
            their properties with UltraSonic Solar Deer Repellent
          </p>

          {/* Success Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Detailed case studies showing real results and transformations
            </p>
          </div>

          <div className="space-y-12 sm:space-y-20">
            {featuredStories.map((story, index) => (
              <div key={story.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <Image
                      src={story.image}
                      alt={`${story.name}'s garden protection success story`}
                      width={600}
                      height={400}
                      className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {story.duration} success
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-3">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600 font-medium">{story.rating}/5 stars</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{story.name}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="mr-4">{story.location}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{story.propertySize}</span>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6">
                    <Quote className="h-6 w-6 text-green-600 mb-3" />
                    <p className="text-gray-700 italic leading-relaxed text-sm sm:text-base">
                      "{story.quote}"
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-semibold text-red-900 mb-2">Before</h4>
                      <p className="text-red-800 text-sm">{story.problemBefore}</p>
                      <p className="text-red-600 font-medium text-sm mt-2">{story.beforeAfter.before}</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">After</h4>
                      <p className="text-green-800 text-sm">{story.resultsAfter}</p>
                      <p className="text-green-600 font-medium text-sm mt-2">{story.beforeAfter.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Grid */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Hundreds of verified reviews from satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.location}</div>
                  <div className="text-green-600 font-medium text-sm mt-2">
                    Result: {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Proven Results Across America
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">
            From small backyard gardens to large commercial farms, UltraSonic Solar Deer Repellent 
            delivers consistent, reliable protection against deer damage.
          </p>

          <div className="bg-green-50 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-green-600">95%</div>
                <div className="text-gray-700 font-medium">Average Damage Reduction</div>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-green-600">30</div>
                <div className="text-gray-700 font-medium">Day Money-Back Guarantee</div>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-green-600">4.8</div>
                <div className="text-gray-700 font-medium">Average Customer Rating</div>
              </div>
            </div>
          </div>

          <Link 
            href="/product"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-lg mb-8"
          >
            See detailed product specifications
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Join Thousands of Satisfied Customers
          </h2>
          <p className="text-lg sm:text-xl text-green-100 mb-8 sm:mb-10">
            Start protecting your garden today and experience the same success. 
            30-day money-back guarantee included.
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

          <div className="mt-6 sm:mt-8 text-green-100 text-sm sm:text-base">
            <p>✓ Free USA Shipping • ✓ 30-Day Money Back Guarantee • ✓ 2-Year Warranty</p>
          </div>
        </div>
      </section>
    </div>
  );
}