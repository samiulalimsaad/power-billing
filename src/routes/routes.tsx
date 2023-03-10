import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
    },
]);
