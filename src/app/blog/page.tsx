import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag, User, TrendingUp } from 'lucide-react';
import CTAButton from '@/components/UI/CTAButton';

export const metadata: Metadata = {
  title: 'Blog - Deer Control Tips & Garden Protection Advice',
  description: 'Expert advice on deer control, garden protection, and wildlife management. Learn effective strategies to protect your plants and landscaping.',
  keywords: [
    'deer control tips',
    'garden protection advice',
    'deer repellent guide',
    'wildlife management',
    'deer deterrent methods',
    'garden defense strategies'
  ],
  openGraph: {
    title: 'Deer Control & Garden Protection Blog',
    description: 'Expert tips and strategies for effective deer control and garden protection.',
  },
};

export default function BlogPage() {
  // 博客文章数据 - 实际应用中可能来自CMS或API
  const featuredPost = {
    id: 'ultimate-guide-deer-control',
    title: 'The Ultimate Guide to Deer Control: 7 Proven Methods That Actually Work',
    excerpt: 'Discover the most effective deer control methods based on scientific research and real-world testing. From ultrasonic devices to natural deterrents, learn which solutions provide the best results for different situations.',
    image: 'https://images.unsplash.com/photo-1551993005-75c4131b6bd8?w=800&h=400&fit=crop&auto=format',
    category: 'Deer Control',
    readTime: '12 min read',
    publishDate: '2024-03-15',
    author: 'Dr. Sarah Wilson',
    featured: true
  };

  const blogPosts = [
    {
      id: 'deer-feeding-patterns',
      title: 'Understanding Deer Feeding Patterns: When They\'re Most Active',
      excerpt: 'Learn about deer behavior patterns throughout the day and seasons to better protect your garden during peak feeding times.',
      image: 'https://images.unsplash.com/photo-1551993005-75c4131b6bd8?w=400&h=250&fit=crop&auto=format',
      category: 'Deer Behavior',
      readTime: '8 min read',
      publishDate: '2024-03-12',
      author: 'Mike Johnson'
    },
    {
      id: 'solar-deer-repellent-vs-battery',
      title: 'Solar vs Battery-Powered Deer Repellents: Complete Comparison',
      excerpt: 'Detailed comparison of solar and battery-powered deer deterrents, including cost analysis, reliability, and environmental impact.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&auto=format',
      category: 'Product Reviews',
      readTime: '10 min read',
      publishDate: '2024-03-10',
      author: 'Tech Team'
    },
    {
      id: 'deer-resistant-plants',
      title: 'Creating a Deer-Resistant Garden: Plants They Naturally Avoid',
      excerpt: 'Comprehensive list of plants that deer typically avoid, plus landscaping tips to create a naturally deer-resistant garden design.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop&auto=format',
      category: 'Gardening Tips',
      readTime: '15 min read',
      publishDate: '2024-03-08',
      author: 'Garden Expert'
    },
    {
      id: 'winter-deer-damage-prevention',
      title: 'Winter Deer Protection: Why Cold Weather Increases Garden Damage',
      excerpt: 'Understand why deer cause more damage in winter and learn effective strategies to protect your landscape during cold months.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format',
      category: 'Seasonal Tips',
      readTime: '9 min read',
      publishDate: '2024-03-05',
      author: 'Wildlife Specialist'
    },
    {
      id: 'ultrasonic-frequency-explained',
      title: '25kHz Frequency Explained: The Science Behind Ultrasonic Deer Deterrents',
      excerpt: 'Deep dive into the science of ultrasonic frequencies and why 25kHz is the optimal frequency for deer deterrence.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop&auto=format',
      category: 'Technology',
      readTime: '11 min read',
      publishDate: '2024-03-03',
      author: 'Dr. Sarah Wilson'
    },
    {
      id: 'garden-damage-assessment',
      title: '5 Signs Your Garden Needs Deer Protection (Before It\'s Too Late)',
      excerpt: 'Early warning signs of deer activity and how to implement protection before significant damage occurs to your plants.',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=250&fit=crop&auto=format',
      category: 'Prevention',
      readTime: '7 min read',
      publishDate: '2024-03-01',
      author: 'Prevention Expert'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 7, slug: 'all' },
    { name: 'Deer Control', count: 2, slug: 'deer-control' },
    { name: 'Product Reviews', count: 1, slug: 'product-reviews' },
    { name: 'Gardening Tips', count: 1, slug: 'gardening-tips' },
    { name: 'Seasonal Tips', count: 1, slug: 'seasonal-tips' },
    { name: 'Technology', count: 1, slug: 'technology' },
    { name: 'Prevention', count: 1, slug: 'prevention' }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-green-600">Home</a>
            <span>/</span>
            <span className="text-gray-900">Blog</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Deer Control & Garden Protection Blog
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Expert advice, scientific insights, and practical tips for effective deer control 
            and garden protection. Learn from wildlife specialists and gardening experts.
          </p>
          <div className="flex items-center justify-center space-x-8 text-green-600 font-medium">
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              <span>Expert Advice</span>
            </div>
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>Wildlife Specialists</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>Updated Weekly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
            <p className="text-gray-600">Our most comprehensive guide to deer control</p>
          </div>

          <Link href={`/blog/${featuredPost.id}`}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(featuredPost.publishDate)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <User className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-gray-900 font-medium">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center text-green-600 font-medium">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar - Categories */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category.slug} className="flex items-center justify-between">
                      <a 
                        href={`/blog/category/${category.slug}`}
                        className="text-gray-700 hover:text-green-600 transition-colors"
                      >
                        {category.name}
                      </a>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Need Immediate Help?</h4>
                  <p className="text-sm text-green-800 mb-4">
                    Get professional deer control advice from our experts.
                  </p>
                  <CTAButton variant="single" className="w-full text-sm py-2 px-4" />
                </div>
              </div>
            </div>

            {/* Main Content - Posts Grid */}
            <div className="lg:w-3/4">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Articles</h2>
                <p className="text-gray-600">Practical tips and expert insights for deer control</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`}>
                    <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="relative h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {formatDate(post.publishDate)}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                              <User className="h-3 w-3 text-gray-600" />
                            </div>
                            <span className="text-xs text-gray-600">{post.author}</span>
                          </div>
                          <div className="flex items-center text-green-600 text-sm font-medium">
                            Read More
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="px-8 py-3 border border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Garden Protection Tips</h2>
            <p className="text-xl text-green-100 mb-8">
              Get weekly expert advice, seasonal tips, and exclusive deer control strategies 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-green-200 mt-4">
              No spam, unsubscribe anytime. Join 5,000+ gardeners protecting their plants.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}