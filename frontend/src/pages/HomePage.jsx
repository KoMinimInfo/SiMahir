import HeroSection from "../components/HomePage/HeroSection";
import ServiceList from "../components/HomePage/ServiceList";
import FAQSection from "../components/HomePage/FAQSection";
import Header from "../components/Common/Header";
import Copyright from "../components/Common/FooterSection/Copyright";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header isLoggedIn={true}  />
      <main className="space-y-48 py-20">
        <HeroSection />
      </main>
      <div className="space-y-10 pb-44">
        <ServiceList />
        <FAQSection />
      </div>
      <Copyright />
    </div>
  );
};

export default App;
