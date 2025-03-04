export type UserID = string;

export interface User {
  id?: UserID;
  email?: string;
  name?: string;
  likedQuotes: string[];
  dislikedQuotes: string[];
}