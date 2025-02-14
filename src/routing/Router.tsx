import { createBrowserRouter } from "react-router";
import DashboardLayout from "../pages/layout/Layout";
import App from "../App";

const router = createBrowserRouter([
 
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [],
  },
  {
    path: "/",
    element: <App/>,
    children: [],
  },
]);

export default router;
