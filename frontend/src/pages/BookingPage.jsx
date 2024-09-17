import Header from "../components/Common/Header";
import Copyright from "../components/Common/FooterSection/Copyright";

const BookingPage = () => {
  return (
    <div>
      <Header isLoggedIn={true} />
      <Copyright />
    </div>
  );
};

export default BookingPage;
