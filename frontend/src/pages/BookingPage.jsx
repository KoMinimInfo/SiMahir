import Header from "../components/Common/Header";
import CardInfo from "../components/BookingPage/HistorySection/CardInfo";
import Copyright from "../components/Common/FooterSection/Copyright";

const BookingPage = () => {
  return (
    <div>
      <Header isLoggedIn={true} />
      <CardInfo />
      <Copyright />
    </div>
  );
};

export default BookingPage;
