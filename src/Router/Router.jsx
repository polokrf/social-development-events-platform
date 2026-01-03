import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Err from "../Err/Err";

import Login from "../Page/Login";
import Register from "../Page/Register";
import Home from "../Page/Home";
import UpcomingEvents from "../Page/UpcomingEvents";
import PrivetRouter from "../PrivetRout/PrivetRouter";
import EventDetails from "../Page/EventDetails";

import About from "../Page/About";
import Dashboard from "../Page/Dashboard/Dashboard";
import MyProfile from "../Page/Dashboard/MyProfile";
import CreateEvents from "../Page/CreateEvents";
import ManageEvents from "../Page/ManageEvents";
import JoinedEvents from "../Page/JoinedEvents";
import UpdateEvents from "../Page/UpdateEvents";
import OverView from "../Page/Dashboard/OverView";


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
        Component: EventDetails,
      },

      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/about',
        Component: About,
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivetRouter>
        <Dashboard></Dashboard>
      </PrivetRouter>
    ),
    errorElement: <Err></Err>,
    children: [
    
      {
        path: '/dashboard',
        element:<PrivetRouter><OverView></OverView></PrivetRouter>
    },
      {
        path: '/dashboard/profile',
        element: (
          <PrivetRouter>
            <MyProfile></MyProfile>
          </PrivetRouter>
        ),
      },
      {
        path: '/dashboard/create',
        element: (
          <PrivetRouter>
            <CreateEvents></CreateEvents>
          </PrivetRouter>
        ),
      },
      {
        path: '/dashboard/manage',
        element: (
          <PrivetRouter>
            <ManageEvents></ManageEvents>
          </PrivetRouter>
        ),
      },
      {
        path: '/dashboard/manage/:id',
        element: (
          <PrivetRouter>
            <UpdateEvents></UpdateEvents>
          </PrivetRouter>
        ),
      },
      {
        path: '/dashboard/join',
        element: (
          <PrivetRouter>
            <JoinedEvents></JoinedEvents>
          </PrivetRouter>
        ),
      },
    ],
  },
]);