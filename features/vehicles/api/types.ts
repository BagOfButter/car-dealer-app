export type TVehicle = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};

export type TVehiclesResponse = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: TVehicle[];
};
