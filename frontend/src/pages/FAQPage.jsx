import Header from "../components/Common/Header";
import FAQSection from "../components/FAQPage/FAQSection";
import Support from "../components/Common/FooterSection/Support";
import Copyright from "../components/Common/FooterSection/Copyright";
import React, { useEffect } from "react";

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Header isLoggedIn={true} />
      <FAQSection />
      <Support />
      <Copyright isLoggedIn={true} />
    </div>
  );
};

export default FAQPage;
