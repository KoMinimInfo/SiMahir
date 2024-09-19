import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const OrderCompletionPopUp = ({ setIsModalOpen, setShowFeedback }) => {
  return (
    <div className="fixed inset-0 mx-5 flex items-center justify-center text-white backdrop-blur-sm">
      <div className="flex flex-col justify-between gap-6 rounded-3xl bg-primary px-10 py-5">
        <div className="flex flex-col justify-between gap-6 sm:flex-row">
          <IoIosCheckmarkCircleOutline
            size={50}
            className="m-auto rounded-md bg-secondary p-2"
          />
          <div className="space-y-4 sm:space-y-0">
            <p className="text-center text-lg font-medium sm:text-left">
              Konfirmasi penyelesaian pesanan
            </p>
            <p className="text-center sm:text-left">
              Apakah Anda yakin pesanan ini sudah selesai?
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:self-end">
          <button
            onClick={() => {
              setShowFeedback(true);
              setIsModalOpen(false);
            }}
            className="rounded-md bg-secondary px-5 py-1"
          >
            Ya, Saya yakin
          </button>
          <button
            onClick={() => {
              setIsModalOpen(false);
            }}
            className="rounded-md border border-black bg-white px-5 py-1 font-medium text-black"
          >
            Tidak, batalkan
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCompletionPopUp;
