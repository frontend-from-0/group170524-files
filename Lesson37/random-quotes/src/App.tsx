import { useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { logout, auth } from "./firebase/auth";
import { AppRouter } from "./AppRouter";
import {
  UserContext,
  UserDispatchContext,
  UserActionTypes,
} from "./UserContext";
import { useNavigate } from "react-router";
import { NavLink } from "react-router";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid } = user;
        dispatch({
          type: UserActionTypes.SetUser,
          payload: { email, name: displayName, id: uid },
        });
      }
    });

    return unsubscribe;
  }, []);

  async function handleLogout() {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Error logging out. Please try again.");
    }
  }

  return (
    <div className="App">
      <nav>
        <ul className="nav__list">
          <li>
            <NavLink to="/" className="nav-btn" end>
              Home
            </NavLink>
          </li>

          {user.id ? (
            <>
            <li>
                <NavLink to={"/quotes/new"} className="nav-btn" end>
                  Add quote
                </NavLink>
              </li>
              <li>
                <NavLink to={"/user/settings"} className="nav-btn" end>
                  Settings
                </NavLink>
              </li>
              <li>
                <button onClick={handleLogout} className="nav-btn">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/user/login" className="nav-btn" end>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/user/register" className="nav-btn" end>
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      <AppRouter />

      {/* <h2>Upload quotes</h2>
      <button onClick={() => uploadQuotesScript()}>Add all existing quotes</button> */}
    </div>
  );
}

export default App;
