import { createBrowserRouter } from "react-router-dom";
import ContextApi from "../pages/ContextApi";
import Zustand from "../pages/Zustand";

export const router = createBrowserRouter([
  { path: "/", element: <ContextApi /> },
  { path: "/zustand", element: <Zustand /> },
]);
