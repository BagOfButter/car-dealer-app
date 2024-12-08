import { TVehiclesResponse } from './types';

export const fetchVehicles = async ({
  year,
  makeId,
}: {
  year: string;
  makeId: string;
}): Promise<TVehiclesResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    console.log(res);
    throw new Error('Failed to fetch vehicles');
  }

  return res.json();
};
