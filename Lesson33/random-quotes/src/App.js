import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { logout } from "./auth";
import { UserPage } from "./components/UserPage";
import { Home } from "./components/Home";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import { uploadQuotesScript } from "./uploadQuotesScript";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  async function handleLogout () {
    try {
      await logout();
      setCurrentPage("home");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  return (
    <div className="App">
      <nav className="nav--top">
        <button onClick={() => setCurrentPage("home")} className="nav-btn">
          Home
        </button>
        {user ? (
          <>
            <button onClick={() => setCurrentPage("user")} className="nav-btn">
              User
            </button>
            <button onClick={handleLogout} className="nav-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setCurrentPage("login")} className="nav-btn">
              Login
            </button>
            <button
              onClick={() => setCurrentPage("register")}
              className="nav-btn"
            >
              Register
            </button>
          </>
        )}
      </nav>
      {currentPage === "home" && <Home />}
      {currentPage === "user" && <UserPage />}
      {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
      {currentPage === "register" && <Register setCurrentPage={setCurrentPage} />}

      <h2>Upload quotes</h2>
      <button onClick={() => uploadQuotesScript()}>Add all existing quotes</button>
    </div>
  );
}

export default App;
