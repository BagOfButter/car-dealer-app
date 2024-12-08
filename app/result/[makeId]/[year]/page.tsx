import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { fetchVehicleMakers, fetchVehicles } from '@/features';
import { ContentWrapper } from '@/shared';

import { ResultContent } from './ui';

export const metadata: Metadata = {
  title: 'Result',
  description: 'Car search result',
};

export async function generateStaticParams() {
  const { Results: vehicleMakers } = await fetchVehicleMakers();
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2015 + 1 },
    (_, index) => 2015 + index
  );

  return vehicleMakers.flatMap(maker =>
    years.map(year => ({
      makeId: `${maker.MakeId}`,
      year: `${year}`,
    }))
  );
}

const fetchData = async ({
  makeId,
  year,
}: {
  makeId: string;
  year: string;
}) => {
  try {
    const vehicles = await fetchVehicles({ year, makeId });

    return vehicles;
  } catch (error) {
    console.log(error);
  }
};

const Result = async ({
  params,
}: {
  params: Promise<{ makeId: string; year: string }>;
}) => {
  const { makeId, year } = await params;
  const vehicles = await fetchData({ makeId, year });

  if (!vehicles || !vehicles.Results || vehicles.Results.length === 0) {
    notFound();
  }

  return (
    <ContentWrapper>
      <ResultContent vehicles={vehicles.Results} />
    </ContentWrapper>
  );
};

export default Result;
