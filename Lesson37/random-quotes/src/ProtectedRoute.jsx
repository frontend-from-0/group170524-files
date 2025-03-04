import { useNavigate } from "react-router";
import {useContext} from "react";
import {UserContext} from "./UserContext";

export const ProtectedRoute = ({children}) => {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const isUserLoggedIn = !!user?.id;


  if (!isUserLoggedIn) navigate('/user/login');

  return isUserLoggedIn && children;
}