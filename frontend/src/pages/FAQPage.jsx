import Header from "../components/Common/Header";
import FAQSection from "../components/FAQPage/FAQSection";
import Support from "../components/Common/FooterSection/Support";
import Copyright from "../components/Common/FooterSection/Copyright";

const FAQPage = () => {
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
