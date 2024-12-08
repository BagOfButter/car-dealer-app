import { TVehicleMakersResponse } from './types';

export const fetchVehicleMakers = async (): Promise<TVehicleMakersResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/GetMakesForVehicleType/car?format=json`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch vehicle makers');
  }

  return res.json();
};
