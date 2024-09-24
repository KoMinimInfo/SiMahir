import HeroSection from "../components/HomePage/HeroSection";
import ServiceList from "../components/HomePage/ServiceList";
import FAQSection from "../components/HomePage/FAQSection";
import Header from "../components/Common/Header";
import Support from "../components/Common/FooterSection/Support";
import Copyright from "../components/Common/FooterSection/Copyright";

const App = () => {
  return (
    <div className="">
      <Header isLoggedIn={true}/>
      <main className="py-20">
        <HeroSection />
      </main>
      <div className="space-y-10 pb-44">
        <ServiceList />
        <FAQSection />
      </div>
      <Support/>
      <Copyright />
    </div>
  );
};

export default App;
