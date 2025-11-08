import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Err from "../Err/Err";
import Home from "../components/Home";
import UpcomingEvents from "../components/UpcomingEvents";
import CreateEvent from "../Page/CreateEvent";
import Login from "../Page/Login";
import Register from "../Page/Register";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Err></Err>,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/upcoming',
        Component: UpcomingEvents,
      },
      {
        path: '/Create',
        element: <CreateEvent></CreateEvent>,
      },
      {
        path: '/login',
        Component:Login,
      },
      {
        path: '/register',
        Component:Register,
      },
    ],
  },
]);