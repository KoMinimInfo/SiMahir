import { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Timeline from "../../../assets/timeline.svg";
import BersihRumah from "../../../assets/bersih-rumah.svg";

const CardInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mx-14 my-28 flex flex-col gap-y-10">
      <h1 className="text-3xl font-semibold text-primary sm:text-4xl">
        Status Pesanan
      </h1>
      <img src={Timeline} className="m-auto w-[800px]" />
      <div className="flex w-full flex-col items-center justify-between border-b-2 pb-10 sm:flex-row">
        <div className="flex flex-col items-center gap-10 sm:flex-row">
          <img src={BersihRumah} />
          <div className="space-y-3">
            <h3 className="text-center text-xl font-medium sm:text-left">
              Bersih Rumah
            </h3>
            <p className="text-center opacity-75 sm:text-left">
              1 - 2 hari pengerjaan
            </p>
          </div>
        </div>
        <h3 className="mt-10 text-center text-2xl text-[#FF7A00] sm:text-left">
          Rp350.000
        </h3>
      </div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <div className="space-y-7">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium">Nama Pesanan</p>
            <p>Keyra Renatha</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium">No Handphone</p>
            <p>0823719203123</p>
          </div>
        </div>
        <div className="space-y-7">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium">Alamat</p>
            <p>
              Jalan Buah Batu No. 123, Buah Batu Kota Bandung, Jawa Barat, 40265
              Indonesia
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-medium">Catatan Perbaikan</p>
            <p>-</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="self-end rounded-lg bg-primary px-4 py-2 text-white"
      >
        Konfirmasi Pesanan
      </button>
      {isModalOpen && (
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
      )}
    </div>
  );
};

export default CardInfo;
