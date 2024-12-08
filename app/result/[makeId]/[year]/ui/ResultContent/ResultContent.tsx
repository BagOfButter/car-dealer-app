'use client';

import React, { Suspense } from 'react';

import { VehicleCard } from '@/entities';
import { TVehicle } from '@/features';
import { LinkButton } from '@/shared';

type ResultContentProps = {
  vehicles: TVehicle[];
};

export const ResultContent = ({ vehicles }: ResultContentProps) => {
  return (
    <div className="w-full gap-12 flex items-center flex-col">
      <LinkButton href="/">Home</LinkButton>
      <Suspense
        fallback={<div className="text-foreground text-center">Loading...</div>}
      >
        <div className="w-full gap-4 flex flex-wrap justify-center">
          {vehicles.map(veh => (
            <VehicleCard key={veh.Model_ID} vehicle={veh} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};
