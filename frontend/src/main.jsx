import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import FAQPage from "./pages/FAQPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "home",
      },
    ],
  },
  {
    path: "/login",
    element: <LogInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/booking",
    element: <BookingPage />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
