import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Err from "../Err/Err";

import Login from "../Page/Login";
import Register from "../Page/Register";
import Home from "../Page/Home";
import UpcomingEvents from "../Page/UpcomingEvents";
import ManageEvents from "../Page/ManageEvents";
import JoinedEvents from "../Page/JoinedEvents";
import CreateEvents from "../Page/CreateEvents";
import PrivetRouter from "../PrivetRout/PrivetRouter";
import EventDetails from "../Page/EventDetails";


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
        path: '/details/:id',
        Component:EventDetails
      },

      {
        path: '/Create',
        element: (
          <PrivetRouter>
            <CreateEvents></CreateEvents>
          </PrivetRouter>
        ),
      },
      {
        path: '/manage',
        element: <ManageEvents></ManageEvents>,
      },
      {
        path: '/joined',
        element: <JoinedEvents></JoinedEvents>,
      },

      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
    ],
  },
]);