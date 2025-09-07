'use client';

interface CTAButtonProps {
  variant?: 'single' | 'double';
  className?: string;
  size?: 'default' | 'large';
  children?: React.ReactNode;
}

export default function CTAButton({ 
  variant = 'single', 
  className = '', 
  size = 'default',
  children 
}: CTAButtonProps) {
  const handleClick = () => {
    const baseUrl = process.env.NEXT_PUBLIC_MAIN_SITE_URL || 'https://rodentlab.com';
    const product = variant === 'double' ? 'deer-repellent-double' : 'deer-repellent-single';
    const utm = `utm_source=deerrepellent.store&utm_medium=cta&utm_campaign=${variant}`;
    
    window.open(`${baseUrl}/products/${product}?${utm}`, '_blank', 'noopener,noreferrer');
  };

  const price = variant === 'double' ? '$79.99' : '$49.99';
  const savings = variant === 'double' ? ' (Save $20!)' : '';
  const baseClasses = size === 'large' 
    ? 'px-8 py-4 text-lg font-bold' 
    : 'px-6 py-3 font-semibold';
  
  const defaultText = `Buy Now - ${price}${savings}`;
  
  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 ${className}`}
    >
      {children || defaultText}
    </button>
  );
}