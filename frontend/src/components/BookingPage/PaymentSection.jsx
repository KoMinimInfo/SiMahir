import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import PengecatanRumah from "../../assets/pengecatan-rumah.svg";

const PaymentSection = () => {
  const [paymentMethod, setPaymentMethod] = useState("Virtual Account");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");

  const banks = [
    "Bank BCA",
    "Bank Mandiri",
    "Bank BRI",
    "Bank BNI",
    "Bank BSI",
  ];

  return (
    <div className="mx-4 my-28 flex flex-col gap-6 sm:mx-56">
      <h1 className="text-2xl font-semibold text-primary sm:text-4xl">
        Pembayaran Pesanan
      </h1>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-0">
        <div className="space-y-1 rounded-xl border border-black border-opacity-25 p-2">
          <img
            src={PengecatanRumah}
            alt="Pengecatan Rumah"
            className="w-full"
          />
          <p className="font-medium sm:text-xl">Pengecatan Rumah</p>
          <p className="text-[#FF7A00] sm:text-2xl">Rp350.000</p>
          <p className="text-sm opacity-75">1-2 hari pengerjaan</p>
        </div>
        <hr className="mx-4 h-auto w-0.5 bg-black opacity-25" />
        <div className="space-y-2">
          <h2 className="gap-4 font-bold sm:text-xl">
            Pilih Metode Pembayaran Anda:
          </h2>
          <div className="flex gap-5">
            <div className="space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="Kartu"
                checked={paymentMethod === "Kartu"}
                onChange={() => setPaymentMethod("Kartu")}
              />
              <label>Kartu</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="Virtual Account"
                checked={paymentMethod === "Virtual Account"}
                onChange={() => setPaymentMethod("Virtual Account")}
              />
              <label>Virtual Account</label>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
