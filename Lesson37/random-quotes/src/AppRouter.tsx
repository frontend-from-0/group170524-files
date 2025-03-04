import { Routes, Route } from "react-router";
import { Home } from "./components/Home";
import { UserPage } from "./components/UserPage";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { ProtectedRoute } from "./ProtectedRoute";
import { QuotePage } from "./components/QuotePage";
import { QuotesPage } from "./components/QuotesPage";
import { NewQuotePage } from "./components/NewQuotePage/uncontroledInputsExample";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="user">
        <Route
          path="settings"
          element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="quotes">
        <Route
          path="new"
          element={
            <ProtectedRoute>
              <NewQuotePage />
            </ProtectedRoute>
          }
        />
        <Route path=":id" element={<QuotePage />} />
        <Route index element={<QuotesPage />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};
