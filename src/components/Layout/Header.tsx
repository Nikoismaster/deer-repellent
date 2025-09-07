'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Product', href: '/product' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Installation Guide', href: '/installation-guide' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
  ];

  const handleBuyNow = (variant: 'single' | 'double' = 'single') => {
    const baseUrl = process.env.NEXT_PUBLIC_MAIN_SITE_URL || 'https://rodentlab.com';
    const product = variant === 'double' ? 'deer-repellent-double' : 'deer-repellent-single';
    const utm = 'utm_source=deerrepellent.store&utm_medium=header&utm_campaign=' + variant;
    
    window.open(`${baseUrl}/products/${product}?${utm}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">
              DeerRepellent.store
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <button
            onClick={() => handleBuyNow('single')}
            className="hidden lg:block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
          >
            Buy Now - $49.99
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleBuyNow('single')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Buy Now - $49.99
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}