import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { SiAmericanexpress } from "react-icons/si";
import { RiVisaLine, RiMastercardFill } from "react-icons/ri";

const PaymentSection = () => {
  const navigate = useNavigate();
  const { orderId } = useLocation().state;
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState(null);
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Kartu");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");
  const banks = [
    "Bank BCA",
    "Bank BNI",
    "Bank BRI",
    "Bank Mandiri",
    "Bank Permata",
    "Bank CIMB",
  ];

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/services/${id}`);
        setName(response.data.data.name);
        setPrice(response.data.data.price);
        setDuration(response.data.data.duration);
        setImage(
          "https://9000-idx-simahir-1729422412747.cluster-a3grjzek65cxex762e4mwrzl46.cloudworkstations.dev/storage/" +
            response.data.data.image,
        );
        console.log(image);
      } catch (err) {
        console.error("Error fetching services:", err);
      }
    })();
  }, []);

  useEffect(() => {
    console.log("expirationDate", expirationDate);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (paymentMethod === "Kartu") {
        const formData = new FormData();
        formData.append("card_number", cardNumber);
        formData.append("card_exp_month", expirationDate.substring(0, 2));
        formData.append("card_exp_year", expirationDate.substring(3));
        formData.append("card_cvv", cvv);
        const fetchCardPayment = await axios.post(
          `/api/payments/credit-card/${orderId}`,
          formData,
        );
        window.open(
          fetchCardPayment.data.data.redirect_url,
          "_blank",
          "noopener,noreferrer",
        );
        navigate("/home");
      } else if (paymentMethod === "Virtual Account") {
        const formData = new FormData();
        formData.append(
          "bank",
          selectedBank.replace("Bank ", "").toLowerCase(),
        );
        const fetchVAPayment = await axios.post(
          `/api/payments/virtual-account/${orderId}`,
          formData,
        );
        alert(fetchVAPayment.data.data.va_number);
        window.open(
          "https://simulator.sandbox.midtrans.com/bca/va/index",
          "_blank",
          "noopener,noreferrer",
        );
      }
      navigate("/home");
      alert("It's Pay time!");
      setCardNumber("");
      setExpirationDate("");
      setCvv("");
      setSelectedBank("");
    } catch (err) {
      alert("Payment failed!");
    }
  };

  const detectCardType = (number) => {
    const visaPattern = /^4/;
    const mastercardPattern = /^5[1-5]/;
    const amexPattern = /^3[47]/;

    if (visaPattern.test(number)) return "visa";
    if (mastercardPattern.test(number)) return "mastercard";
    if (amexPattern.test(number)) return "amex";
    return null;
  };

  const CardIcon = () => {
    switch (cardType) {
      case "visa":
        return <RiVisaLine size={30} color="blue" />;
      case "mastercard":
        return <RiMastercardFill size={30} color="red" />;
      case "amex":
        return <SiAmericanexpress size={30} color="green" />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-4 my-28 flex flex-col gap-6 sm:mx-24 lg:mx-56">
      <h1 className="text-2xl font-semibold text-primary sm:text-4xl">
        Pembayaran Pesanan
      </h1>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-0">
        <div className="space-y-1 rounded-xl border border-black border-opacity-25 p-2">
          <img src={image} alt={name} className="w-full" />
          <p className="font-medium sm:text-xl">{name}</p>
          <p className="text-[#FF7A00] sm:text-2xl">Rp{price}</p>
          <p className="text-sm opacity-75">{duration}</p>
        </div>
        <hr className="mx-4 h-auto w-0.5" />
        <div className="space-y-2">
          <h2 className="gap-4 font-bold sm:text-xl">
            Pilih Metode Pembayaran Anda:
          </h2>
          <div className="flex gap-5">
            <div className="space-x-2">
              <input
                type="radio"
                id="Kartu"
                name="paymentMethod"
                value="Kartu"
                checked={paymentMethod === "Kartu"}
                onChange={() => setPaymentMethod("Kartu")}
              />
              <label htmlFor="Kartu">Kartu</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                id="Virtual Account"
                name="paymentMethod"
                value="Virtual Account"
                checked={paymentMethod === "Virtual Account"}
                onChange={() => setPaymentMethod("Virtual Account")}
              />
              <label htmlFor="Virtual Account">Virtual Account</label>
            </div>
          </div>
          {paymentMethod === "Virtual Account" ? (
            <div>
              <button
                className="relative w-full rounded-md border border-gray-300 bg-white p-2 text-left"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedBank || "Silahkan Pilih Bank Anda"}
                {isDropdownOpen ? (
                  <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2" />
                ) : (
                  <IoIosArrowForward className="absolute right-3 top-1/2 -translate-y-1/2" />
                )}
              </button>

              {isDropdownOpen && (
                <ul className="mt-1 w-full rounded-md bg-white py-1 text-sm shadow-lg">
                  {banks.map((bank) => (
                    <li
                      key={bank}
                      className="cursor-pointer px-3 py-2 text-gray-900 hover:bg-gray-100"
                      onClick={() => {
                        setSelectedBank(bank);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {bank}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className="max-w-72">
              <div className="relative mb-4">
                <input
                  minLength={19} // 16 digits + 3 spaces
                  type="text"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="4242 4242 4242 4242"
                  required
                  value={(() => {
                    const groups = cardNumber.match(/\d{1,4}/g);
                    return groups ? groups.join(" ") : "";
                  })()}
                  onChange={(e) => {
                    const input = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 16);
                    setCardNumber(input);
                    setCardType(detectCardType(input));
                  }}
                />
                <div className="pointer-events-none absolute inset-y-0 end-0 top-0 flex items-center pe-3.5">
                  <CardIcon />
                </div>
              </div>
              <div className="mb-4 grid grid-cols-3 gap-4">
                <div className="relative col-span-2 max-w-sm">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                    <CiCalendar size={20} color="gray" />
                  </div>
                  <input
                    minLength={7} // MM/YYYY
                    id="card-expiration-input"
                    type="text"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="MM/YYYY"
                    required
                    value={expirationDate}
                    onChange={(e) => {
                      let input = e.target.value.replace(/\D/g, "");
                      if (input.length > 2) {
                        input = input.slice(0, 2) + "/" + input.slice(2, 6);
                      }
                      setExpirationDate(input);
                    }}
                  />
                </div>
                <div className="col-span-1">
                  <input
                    minLength={3}
                    type="number"
                    id="cvv-input"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="CVV"
                    required
                    value={cvv}
                    onChange={(e) => {
                      const input = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 3);
                      setCvv(input);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          <button
            onClick={handleSubmit}
            className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
