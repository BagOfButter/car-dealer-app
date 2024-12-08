import React from 'react';
import Link from 'next/link';

interface LinkButtonProps {
  href: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  disabled = false,
  children,
  className = '',
}) => {
  if (disabled) {
    return (
      <div
        className={`inline-flex items-center justify-center px-4 py-2 border rounded-md text-foreground bg-background w-36 cursor-not-allowed ${className}`}
        aria-disabled="true"
      >
        {children}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-4 py-2 border rounded-md text-foreground bg-header w-36 ${
        disabled ? 'bg-background cursor-not-allowed' : 'hover:bg-hover'
      } ${className}`}
      aria-disabled={disabled ? 'true' : undefined}
    >
      {children}
    </Link>
  );
};
