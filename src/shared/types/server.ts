export interface ListResponse<T> {
  Response: "True" | "False";
  Search: T[];
  totalResults: string;
}

export interface ServerErrorResponse {
  Error: string;
  Response: "False" | "True";
}
