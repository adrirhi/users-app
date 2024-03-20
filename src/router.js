import { createBrowserRouter, useParams } from "react-router-dom";

import Users from "./components/Users";
import User from "./components/User";

const Home = () => <h1>Home</h1>;

const PageNotFount = () => <h1>Page Not Foun</h1>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <PageNotFount />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:id",
    element: <User />,
  },
  {
    path: "/users/add",
    element: <User />,
  },
]);
