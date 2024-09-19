import { BrowserRouter, Route, Routes } from "react-router-dom";
import WalkPathPage from "../pages/WalkPathPage";
import MainPage from "../pages/MainPage";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/walkpath" element={<WalkPathPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;