import { Route, Routes } from "react-router-dom";
import { publickRoutes } from "./routes";
export function AppRouter() {
  return (
    <Routes>
      {publickRoutes.map((route, index) => (
        <Route key={index} element={route.component} path={route.path} />
      ))}
    </Routes>
  );
}
