import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Gamedetails from "./pages/Gamedetails";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "games/:id", element: <Gamedetails /> },
    ],
  },
]);

export default router;
