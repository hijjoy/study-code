import { createBrowserRouter } from "react-router-dom";
import ContextApi from "../pages/ContextApi";
import Zustand from "../pages/Zustand";
import Recoil from "../pages/Recoil";

export const router = createBrowserRouter([
  { path: "/", element: <ContextApi /> },
  { path: "/zustand", element: <Zustand /> },
  { path: "/recoil", element: <Recoil /> },
]);
