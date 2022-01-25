import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AUTH_ROUTE, CHAT_ROUTE } from "../components/utils/consts";
import { privateRoutes, publicRoutes } from "./routes";

const AppRouter = () => {
  const auth = false;
  return auth ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={CHAT_ROUTE} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={AUTH_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
