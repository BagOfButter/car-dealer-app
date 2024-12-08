import { fetchVehicleMakers } from '@/features';
import { ContentWrapper } from '@/shared';

import { PageContent } from './ui';

const fetchData = async () => {
  try {
    const vehicleMakers = await fetchVehicleMakers();

    return vehicleMakers;
  } catch (error) {
    console.log(error);
  }
};

const Home = async () => {
  const vehicleMakers = await fetchData();
  return (
    <ContentWrapper>
      <PageContent vehicleMakers={vehicleMakers?.Results} />
    </ContentWrapper>
  );
};

export default Home;
