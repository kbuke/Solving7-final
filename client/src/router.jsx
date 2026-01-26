import { createBrowserRouter } from "react-router"
import App from "./App"

import { LoginPage } from "./Pages/LoginPage/LoginPage"
import { AdminPage } from "./Pages/AdminPage/AdminPage"
import { HomePg } from "./Pages/UserPage/HomePg"
import { About } from "./Pages/UserPage/AboutPg/About"
import { SustainableGoals } from "./Pages/SustainableGoals/SustainableGoals"
import { PublicLayout } from "./Layout/PublicLayout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // data + outlet context lives here
    children: [

      // ✅ Routes WITH NavBar
      {
        element: <PublicLayout />,
        children: [
          { index: true, element: <HomePg /> },
          { path: "about", element: <About /> },
          { path: "sustainablegoals", element: <SustainableGoals /> },
        ],
      },

      // ❌ Routes WITHOUT NavBar
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "admin",
        element: <AdminPage />,
      },
    ],
  },
])

