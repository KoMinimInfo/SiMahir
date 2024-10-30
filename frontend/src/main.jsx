// src/index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import axios from "axios";
import HomePage from "./pages/HomePage.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import FAQPage from "./pages/FAQPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ErrorBoundary from "./components/ErrorBoundary";
import ProductPage from "./pages/ProductPage.jsx";
import BookingFormPage from "./pages/BookingFormPage.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";

axios.defaults.baseURL =
  "https://9000-idx-simahir-1729422412747.cluster-a3grjzek65cxex762e4mwrzl46.cloudworkstations.dev";
axios.defaults.headers.common["Authorization"] =
  `Bearer ${localStorage.getItem("accessToken")}`;

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
    path: "/payment/:id",
    element: <PaymentPage />,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/bookingform/:id",
    element: <BookingFormPage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
);
