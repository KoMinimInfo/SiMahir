// src/components/BookingPage.jsx
import Header from "../components/Common/Header";
import Copyright from "../components/Common/FooterSection/Copyright";
import Support from "../components/Common/FooterSection/Support";
import BookingCards from "../components/BookingPage/BookingCards";
import React, { useEffect } from "react";

const BookingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header isLoggedIn={true} />
      <BookingCards />
      <Support />
      <Copyright />
    </div>
  );
};

export default BookingPage;
