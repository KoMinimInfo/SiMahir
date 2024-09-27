import ProductDetail from "../components/BookingPage/ProductDetail";
import Header from "../components/Common/Header";
import Support from "../components/Common/FooterSection/Support";
import Copyright from "../components/Common/FooterSection/Copyright";

const ProductPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header isLoggedIn={true} />
            <ProductDetail />
            <div className="flex-grow" /> 
            <Support />
            <Copyright isLoggedIn={true} />
        </div>
    );
};

export default ProductPage;

  