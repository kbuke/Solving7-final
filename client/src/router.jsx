import { createBrowserRouter, Navigate } from "react-router"

import App from "./App"
import { LoginPage } from "./Pages/LoginPage/LoginPage"
import { AdminPage } from "./Pages/AdminPage/AdminPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },

      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
    // children: [
    //     // Create object with path and element keys
    //     {
    //         path: "/",
    //         element: <HomePage />
    //     },

    //     {
    //         path: "/contact",
    //         element: <ContactPage />
    //     },

    //     {
    //         path: "/login",
    //         element: <LoginPage />
    //     },

    //     {
    //         path: "/admin",
    //         element: <AdminPage />
    //     },

    //     {
    //         path: "/team",
    //         element: <TeamPage />
    //     }
    // ]
  },
])
