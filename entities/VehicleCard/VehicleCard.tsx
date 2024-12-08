import { TVehicle } from '@/features';

type VehicleCardProps = {
  vehicle: TVehicle;
};

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <div className="bg-header p-2 gap-4 rounded-md flex flex-row items-center border border-foreground">
      <h2 className="text-xl font-semibold text-foreground">
        {vehicle.Make_Name}
      </h2>
      <p className="text-lg text-foreground">{vehicle.Model_Name}</p>
    </div>
  );
};
