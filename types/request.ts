export interface ApiResponse<T> {
  code: string | number;
  data: T;
  message: string;
  success: boolean;
  total?: number
}


export interface Page {
  page: number,
  size: number
}