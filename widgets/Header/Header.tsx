import React from 'react';
import { FaCarAlt } from 'react-icons/fa';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-header">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-4">
        <Link href="/" passHref>
          <FaCarAlt className="text-foreground" size="clamp(24px, 5vw, 48px)" />
        </Link>
      </div>
    </header>
  );
};
