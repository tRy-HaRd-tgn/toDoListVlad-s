import { Route, Routes } from "react-router-dom";
import { publickRoutes } from "./routes";
export const AppRouter = () => {
  return (
    <Routes>
      {publickRoutes.map((route, index) => {
        <Route
          key={index}
          element={route.component}
          path={route.path}
          exact={route.exact}
        />;
      })}
    </Routes>
  );
};
