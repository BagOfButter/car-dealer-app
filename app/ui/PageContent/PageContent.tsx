'use client';

import React, { useState } from 'react';

import { TVehicleMaker } from '@/features';
import { DropdownSelector, LinkButton } from '@/shared';

type PageContentProps = {
  vehicleMakers?: TVehicleMaker[];
};

export const PageContent = ({ vehicleMakers = [] }: PageContentProps) => {
  const [selectedMaker, setSelectedMaker] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2015 + 1 },
    (_, i) => 2015 + i
  );

  const handleMakerSelect = (maker: { label: string; value: number }) => {
    setSelectedMaker(maker.value);
  };

  const handleYearSelect = (year: { label: string; value: number }) => {
    setSelectedYear(year.value);
  };

  return (
    <div className="flex w-full justify-center items-center gap-5 flex-wrap md:flex-row flex-col">
      <DropdownSelector
        options={vehicleMakers.map((item: TVehicleMaker) => ({
          label: item.MakeName,
          value: item.MakeId,
        }))}
        onOptionSelect={handleMakerSelect}
        placeholder="Select a vehicle maker"
      />
      <DropdownSelector
        options={years.map(year => ({
          label: year.toString(),
          value: year,
        }))}
        onOptionSelect={handleYearSelect}
        placeholder="Select a year"
      />
      <LinkButton
        href={`/result/${selectedMaker}/${selectedYear}`}
        disabled={!selectedMaker || !selectedYear}
      >
        Next
      </LinkButton>
    </div>
  );
};
