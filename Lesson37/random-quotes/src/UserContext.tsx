import { createContext, useReducer, ReactNode } from "react";
import { User } from "./models/user";

export enum UserActionTypes {
  SetUser = "SET_USER",
  UpdateLikedQuotes = "UPDATE_LIKED_QUOTES",
  UpdateDislikedQuotes =  "UPDATE_DISLIKED_QUOTES"
};

export const UserContext = createContext<User>({  likedQuotes: [], dislikedQuotes: [] });
export const UserDispatchContext = createContext<React.Dispatch<any>>(() => null);



interface SetUserAction {
  type: UserActionTypes.SetUser;
  payload: User;
}

interface UpdateLikedQuotesAction {
  type: UserActionTypes.UpdateLikedQuotes;
  payload: { id: string };
}

interface UpdateDislikedQuotesAction {
  type: UserActionTypes.UpdateDislikedQuotes;
  payload: { id: string };
}

type UserActions = SetUserAction | UpdateLikedQuotesAction | UpdateDislikedQuotesAction;

function userReducer(state: User, action: UserActions): User {
  switch (action.type) {
    case UserActionTypes.SetUser:
      return { ...action.payload, likedQuotes: [], dislikedQuotes: [] };
    case UserActionTypes.UpdateLikedQuotes:
      if (state.dislikedQuotes.includes(action.payload.id)) {
        const updatedDislikedQuotes = state.dislikedQuotes.filter(
          (dislikedQuoteId) => dislikedQuoteId !== action.payload.id
        );
        return {
          ...state,
          likedQuotes: [...state.likedQuotes, action.payload.id],
          dislikedQuotes: updatedDislikedQuotes,
        };
      }
      return {
        ...state,
        likedQuotes: [...state.likedQuotes, action.payload.id],
      };
    case UserActionTypes.UpdateDislikedQuotes:
      if (state.likedQuotes.includes(action.payload.id)) {
        const updatedLikedQuotes = state.likedQuotes.filter(
          (likedQuoteId) => likedQuoteId !== action.payload.id
        );
        return {
          ...state,
          dislikedQuotes: [...state.dislikedQuotes, action.payload.id],
          likedQuotes: updatedLikedQuotes,
        };
      }
      return {
        ...state,
        dislikedQuotes: [...state.dislikedQuotes, action.payload.id],
      };
    default:
      // @ts-ignore next line
      throw new Error(`Action type ${action.type} is not supported`);
  }
}

export const UserProvider = ({children}: {children: ReactNode}) => {
  const [user, dispatch] = useReducer(userReducer, { id: '', email: '', name: '', likedQuotes: [], dislikedQuotes: [] });

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
