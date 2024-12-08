import React from 'react';

export const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto py-5 h-full sm:w-[calc(100vw-120px)] xs:w-[calc(100vw-40px)]">
      {children}
    </div>
  );
};
