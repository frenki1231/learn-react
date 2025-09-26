export type ItemType = {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
};

export type SuccessResponse = {
  results: ItemType[];
  info: Info;
};

export type Info = {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
};

export type ErrorResponse = {
  error: string;
};
export type ApiResponse = SuccessResponse | ErrorResponse;
