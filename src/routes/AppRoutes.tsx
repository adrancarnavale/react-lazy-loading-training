import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = lazy(() =>
  import("../components/Main/Main").then((module) => ({ default: module.Main }))
);

const Login = lazy(() =>
  import("../components/Login/Login").then((module) => ({
    default: module.Login,
  }))
);

const Profile = lazy(() =>
  import("../components/Profile/Profile").then((module) => ({
    default: module.Profile,
  }))
);

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Suspense>
        </Routes>
      </BrowserRouter>
    </>
  );
};
