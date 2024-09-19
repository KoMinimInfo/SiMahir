import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const FeedbackPopUp = () => {
  return (
    <div className="fixed inset-0 mx-5 flex items-center justify-center text-white backdrop-blur-sm">
      <div className="flex flex-col items-center gap-2 rounded-3xl bg-primary px-10 py-5">
        <IoIosCheckmarkCircleOutline
          size={80}
          className="rounded-md bg-secondary px-2"
        />
        <p className="text-center text-2xl font-medium sm:text-left">
          Terima Kasih!
        </p>
        <p className="text-center text-xl sm:text-left">
          Feedback Anda telah berhasil dikirim
        </p>
      </div>
    </div>
  );
};

export default FeedbackPopUp;
