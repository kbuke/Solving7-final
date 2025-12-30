import { createBrowserRouter, Navigate } from "react-router";

import App from "./App";
import { HomePage } from "./Pages/HomePg/HomePage";
import { ContactPage } from "./Pages/ContactPg/ContactPage";
import { LoginPage } from "./Pages/LoginPg/LoginPage";
import { AdminPage } from "./Pages/AdminPg/AdminPage";
import { TeamPage } from "./Pages/TeamPg/TeamPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // Create object with path and element keys 
            {
                path: "/",
                element: <HomePage />
            },

            {
                path: "/contact",
                element: <ContactPage />
            },

            {
                path: "/login",
                element: <LoginPage />
            },

            {
                path: "/admin",
                element: <AdminPage />
            },

            {
                path: "/team",
                element: <TeamPage />
            }
        ]
    }
])