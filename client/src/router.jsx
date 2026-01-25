import { createBrowserRouter, Navigate } from "react-router"

import App from "./App"
import { LoginPage } from "./Pages/LoginPage/LoginPage"
import { AdminPage } from "./Pages/AdminPage/AdminPage"
import { HomePg } from "./Pages/UserPage/HomePg"
import { About } from "./Pages/UserPage/AboutPg/About"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePg />
      },

      {
        path: "/about",
        element: <About />
      },

      {
        path: "/login",
        element: <LoginPage />,
      },

      {
        path: "/admin",
        element: <AdminPage />,
      }
    ]
  },
])
