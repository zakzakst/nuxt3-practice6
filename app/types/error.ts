export type ApiError = {
  message: string;
};

export type PageError = {
  status: number;
  message: string;
  details?: string;
};
