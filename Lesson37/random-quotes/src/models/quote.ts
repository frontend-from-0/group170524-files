import { UserID } from "./user";

export interface Quote {
  id: string;
  quote: string;
  author: string;
  likedBy: UserID[];
  dislikedBy: UserID[];
}