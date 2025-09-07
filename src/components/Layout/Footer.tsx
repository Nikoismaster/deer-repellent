'use client';

import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    product: [
      { name: 'Product Details', href: '/product' },
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Installation Guide', href: '/installation-guide' },
      { name: 'Warranty Info', href: '/warranty' },
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Success Stories', href: '/success-stories' },
      { name: 'Contact Support', href: '/contact' },
      { name: 'Returns', href: '/returns' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Deer Problems', href: '/deer-problems' },
      { name: 'Garden Protection Tips', href: '/blog/garden-protection' },
      { name: 'Seasonal Guide', href: '/blog/seasonal-guide' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Shipping Info', href: '/shipping' },
    ],
  };

  const handleBuyNow = (variant: 'single' | 'double' = 'single') => {
    const baseUrl = process.env.NEXT_PUBLIC_MAIN_SITE_URL || 'https://rodentlab.com';
    const product = variant === 'double' ? 'deer-repellent-double' : 'deer-repellent-single';
    const utm = 'utm_source=deerrepellent.store&utm_medium=footer&utm_campaign=' + variant;
    
    window.open(`${baseUrl}/products/${product}?${utm}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">DeerRepellent.store</span>
            </Link>
            <p className="text-gray-400 mb-6 text-sm">
              Protect your garden with our solar-powered ultrasonic deer repellent. 
              Effective, humane, and eco-friendly wildlife control.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => handleBuyNow('single')}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm"
              >
                Single Pack - $49.99
              </button>
              <button
                onClick={() => handleBuyNow('double')}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm"
              >
                Double Pack - $79.99 (Save $20!)
              </button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-green-400">Product</h3>
            <ul className="space-y-3">
              {footerSections.product.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-green-400">Support</h3>
            <ul className="space-y-3">
              {footerSections.support.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-green-400">Resources</h3>
            <ul className="space-y-3">
              {footerSections.resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-green-400">Company</h3>
            <ul className="space-y-3">
              {footerSections.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-green-400" />
              <div>
                <p className="text-sm font-medium">Email Support</p>
                <p className="text-sm text-gray-400">support@rodentlab.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-green-400" />
              <div>
                <p className="text-sm font-medium">Phone Support</p>
                <p className="text-sm text-gray-400">1-800-DEER-AWAY</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-green-400" />
              <div>
                <p className="text-sm font-medium">Shipping</p>
                <p className="text-sm text-gray-400">Free USA Shipping</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} DeerRepellent.store. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <span className="text-sm text-gray-400">
                Secure SSL Protected
              </span>
              <span className="text-sm text-gray-400">
                30-Day Money Back Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}