export type TVehicleMaker = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: string;
  VehicleTypeName: string;
};

export type TVehicleMakersResponse = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: TVehicleMaker[];
};
