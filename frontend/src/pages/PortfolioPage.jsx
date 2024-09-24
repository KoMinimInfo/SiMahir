import Header from "../components/Common/Header";
import PortfolioSection from "../components/PortfolioPage/PortfolioSection";
import Support from "../components/Common/FooterSection/Support";
import Copyright from "../components/Common/FooterSection/Copyright";

const FAQPage = () => {
  return (
    <div>
      <Header isLoggedIn={true}/>
      <PortfolioSection />
      <Support />
      <Copyright/>

    </div>
  );
};

export default FAQPage;
