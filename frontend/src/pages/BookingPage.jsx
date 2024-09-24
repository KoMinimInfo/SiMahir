import Header from "../components/Common/Header";
import CardInfo from "../components/BookingPage/HistorySection/CardInfo";
import Copyright from "../components/Common/FooterSection/Copyright";
import Support from "../components/Common/FooterSection/Support";

const BookingPage = () => {
  return (
    <div>
      <Header isLoggedIn={true} />
      <CardInfo />
      <Support />
      <Copyright />
    </div>
  );
};

export default BookingPage;
