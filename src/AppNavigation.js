import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Login from "./Pages/Login/Login";
import Layout from "./Layout";
import Home from "./Pages/home/Home";
import Search from "./Pages/search/Search";
import Messages from "./Pages/messages/Messages";
import Wallet from "./Pages/wallet/Wallet";
import Create from "./Pages/create/Create";
import Profile from "./Pages/profile/Profile";
import Notifications from "./Pages/notification/Notifications";

export default function AppNavigation() {
  const { isAuthenticated } = useAuth();

  let routes = useRoutes([
    {
      path: "/login",
      element: !isAuthenticated ? <Login /> : <Navigate to="/" />,
    },
    {
      path: "/",
      element: isAuthenticated ? <Layout /> : <Navigate to="/login" />,
      children: [
        { path: "", element: <Home /> }, // default route
        { path: "search", element: <Search /> },
        { path: "notification", element: <Notifications /> },
        { path: "message", element: <Messages /> },
        { path: "wallet", element: <Wallet /> },
        { path: "create", element: <Create /> },
        { path: "profile", element: <Profile /> },
      ],
    },
    { path: "*", element: <Navigate to="/" /> }, // redirect unknown routes to home
  ]);

  return routes;
}
