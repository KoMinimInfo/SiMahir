import Header from "../components/Common/Header";
import Copyright from "../components/Common/FooterSection/Copyright";
import Support from "../components/Common/FooterSection/Support";
import React, { useEffect } from "react";
import BookingForm from "../components/BookingPage/BookingForm";

const BookingFormPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header isLoggedIn={true} />
      <BookingForm />
      <Support />
      <Copyright />
    </div>
  );
};

export default BookingFormPage;
