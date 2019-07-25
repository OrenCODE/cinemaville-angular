export interface Movie {
  _id?: string;
  name: string;
  genre: string;
  actors?: string[];
  year?: number;
  image?: string;

  success: boolean;
}
