import { createBrowserRouter, Navigate } from "react-router";

import App from "./App";
import { ContactPage } from "./Pages/ContactPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // Create object with path and element keys 
            {
                path: "/contact",
                element: <ContactPage />
            }
        ]
    }
])