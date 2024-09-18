import { useState, useEffect, useRef } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Hero from "../../assets/hero.svg";

const ProfileSection = () => {
  const [editMode, setEditMode] = useState(false);
  const [fullName, setFullName] = useState("Kayra Renatha");
  const [phoneNumber, setPhoneNumber] = useState("087849104759");
  const [address, setAddress] = useState("Jl. Soekarno Hatta No.45");
  const [email, setEmail] = useState("kayrarenatha@gmail.com");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editMode) {
      inputRef.current.focus();
    }
  }, [editMode]);

  return (
    <div className="mx-14 my-28 flex flex-col gap-y-10">
      <h1 className="text-4xl font-semibold text-primary">Informasi Akun</h1>
      <div className="flex flex-col items-center justify-between gap-10 sm:flex-row">
        <div className="flex flex-col items-center justify-between gap-10 sm:flex-row">
          <img src={Hero} />
          <div className="space-y-2">
            <h4 className="text-3xl font-semibold">Kayra Renatha</h4>
            <p>kayrarenatha@gmail.com</p>
          </div>
        </div>
        {!editMode && (
          <button
            onClick={() => {
              setEditMode(true);
            }}
            className="rounded-xl bg-primary px-4 py-2 text-white"
          >
            Edit Profil
          </button>
        )}
      </div>
      <form className="w-full space-y-3 sm:w-2/3">
        <div className="flex flex-col space-y-1">
          <label>Nama Lengkap</label>
          <input
            ref={inputRef}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            className={`${!editMode ? "text-slate-500" : ""} h-9 rounded-lg border-2 p-2`}
            readOnly={!editMode}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label>No. Handphone</label>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            className={`${!editMode ? "text-slate-500" : ""} h-9 rounded-lg border-2 p-2`}
            readOnly={!editMode}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label>Alamat Lengkap</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className={`${!editMode ? "text-slate-500" : ""} h-9 rounded-lg border-2 p-2`}
            readOnly={!editMode}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className={`${!editMode ? "text-slate-500" : ""} h-9 rounded-lg border-2 p-2`}
            readOnly={!editMode}
          />
        </div>
        <div className="flex justify-end gap-5">
          {editMode && (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
                className="rounded-xl bg-primary px-8 py-2 text-white"
              >
                Simpan
              </button>
              <button
                onClick={() => {
                  setEditMode(false);
                }}
                className="rounded-xl border-2 border-primary px-7 py-2 text-primary"
              >
                Batalkan
              </button>
            </>
          )}
        </div>
      </form>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center text-white backdrop-blur-sm">
          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-primary px-10 py-5">
            <div className="flex justify-between gap-6">
              <IoIosCheckmarkCircleOutline
                size={50}
                className="rounded-md bg-secondary p-2"
              />
              <div>
                <p className="text-lg font-medium">
                  Perubahan ini akan mengupdate profil Anda.
                </p>
                <p>Yakin untuk melanjutkan?</p>
              </div>
            </div>
            <div className="space-x-5 self-end">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setEditMode(false);
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

export default ProfileSection;
