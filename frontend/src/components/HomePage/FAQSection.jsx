import FAQIllust from "../../assets/FAQIllust.svg";
import { useNavigate } from "react-router-dom";

const FAQSection = () => {
  
  const navigate = useNavigate();

  const handleFaq = () => {
    navigate('/faq');
  };

  return (
    <div className="h-auto w-full md:w-3/6 bg-primary py-10 px-4 md:px-20 mx-auto my-auto rounded-2xl">
      <section className="flex flex-col md:flex-row items-center">
        <img
          src={FAQIllust}
          alt="FAQ Illustration"
          className="w-2/4 max-w-xs md:max-w-none md:w-1/2"
        />
        <div className="flex flex-col ml-0 md:ml-10 mt-6 md:mt-0">
          <h1 className="text-white text-4xl font-poppins font-medium text-center md:text-left">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="mt-4 text-white text-2xl font-poppins text-center md:text-left">
            Lihat lebih lengkap terkait SI MAHIR
          </p>
          <button className="mt-4 bg-orange-500 hover:bg-white text-white hover:text-primary text-xl py-2 px-4 rounded-md inline-block w-6/12 md:w-5/12 mx-auto md:mx-0"
          onClick={handleFaq}>
            FAQ
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
