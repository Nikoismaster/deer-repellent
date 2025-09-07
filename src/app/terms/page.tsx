import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - DeerRepellent.store',
  description: 'Terms and conditions for using DeerRepellent.store and purchasing our products.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-green-600">Home</a>
            <span>/</span>
            <span className="text-gray-900">Terms of Service</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: March 15, 2024</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using DeerRepellent.store, you accept and agree to be bound by the 
              terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Information</h2>
            <p className="text-gray-700 mb-4">
              We strive to provide accurate product information, but we do not warrant that product 
              descriptions or other content is accurate, complete, reliable, or error-free.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Product effectiveness may vary based on local conditions</li>
              <li>Installation requirements may differ by property</li>
              <li>Results are not guaranteed in all situations</li>
              <li>Professional installation may be recommended for optimal results</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Orders and Payment</h2>
            <p className="text-gray-700 mb-4">
              By placing an order, you represent that you are authorized to use the payment method 
              and that the information you provide is true and accurate.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All orders are subject to acceptance and availability</li>
              <li>Prices are subject to change without notice</li>
              <li>Payment is processed securely through our payment partners</li>
              <li>Sales tax may apply based on your location</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping and Delivery</h2>
            <p className="text-gray-700 mb-4">Shipping terms and conditions:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Free shipping within the continental United States</li>
              <li>Delivery times are estimates and not guaranteed</li>
              <li>Risk of loss transfers to you upon delivery</li>
              <li>Additional charges may apply for expedited shipping</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Returns and Refunds</h2>
            <p className="text-gray-700 mb-4">Our return policy includes:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>30-day money-back guarantee on all products</li>
              <li>Products must be returned in original condition</li>
              <li>Return shipping costs are the responsibility of the customer</li>
              <li>Refunds will be processed within 5-7 business days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranty</h2>
            <p className="text-gray-700 mb-4">
              Our products come with a 2-year limited warranty covering:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Manufacturing defects</li>
              <li>Component failures under normal use</li>
              <li>Solar panel and battery performance</li>
              <li>Electronic component malfunctions</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Warranty does not cover damage from misuse, accidents, or normal wear and tear.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700">
              In no event shall DeerRepellent.store be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including without limitation, loss of 
              profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700">
              All content on this website, including text, graphics, logos, and images, is the 
              property of DeerRepellent.store and is protected by intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700">
              These terms shall be governed by and construed in accordance with the laws of the 
              United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">Email: legal@rodentlab.com</p>
              <p className="text-gray-700">Phone: 1-800-DEER-AWAY</p>
              <p className="text-gray-700">Address: [Your Business Address]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}