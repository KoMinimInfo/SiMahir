import Header from "../components/Common/Header";
import PaymentSection from "../components/BookingPage/PaymentSection";
import Support from "../components/Common/FooterSection/Support";
import Copyright from "../components/Common/FooterSection/Copyright";

const PaymentPage = () => {
  return (
    <div>
      <Header isLoggedIn={true} />
      <PaymentSection />
      <Support />
      <Copyright isLoggedIn={true} />
    </div>
  );
};

export default PaymentPage;
