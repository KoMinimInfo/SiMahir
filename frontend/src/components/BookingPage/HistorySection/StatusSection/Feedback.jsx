const Feedback = ({ setIsFeedbackSubmitted }) => {
  return (
    <div className="space-y-2 sm:space-y-7">
      <div className="space-y-2">
        <h3 className="text-xl font-medium sm:text-3xl">
          Terima Kasih Telah Menggunakan Layanan Kami
        </h3>
        <p className="text-lg font-medium sm:text-2xl">
          Berikan Umpan Balik Anda!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="text-lg">
          Tulis feedback Anda di kolom ini untuk membantu kami menjadi lebih
          baik
        </p>
        <textarea className="h-40 w-full max-w-[550px] rounded-3xl border border-black p-3"></textarea>
        <button
          onClick={() => setIsFeedbackSubmitted(true)}
          className="rounded-lg bg-primary px-5 py-3 font-medium text-white"
        >
          Kirim Feedback
        </button>
      </div>
    </div>
  );
};

export default Feedback;
