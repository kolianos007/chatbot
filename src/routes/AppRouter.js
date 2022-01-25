import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AUTH_ROUTE, CHAT_ROUTE } from "../components/utils/consts";
import useAuth from "../hooks/useAuth";
import { privateRoutes, publicRoutes } from "./routes";

const AppRouter = () => {
  const { user } = useAuth();
  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route
          key={`${path}-${Component}`}
          path={path}
          element={<Component />}
        />
      ))}
      <Route path="*" element={<Navigate to={CHAT_ROUTE} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route
          key={`${path}-${Component}`}
          path={path}
          element={<Component />}
        />
      ))}
      <Route path="*" element={<Navigate to={AUTH_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
