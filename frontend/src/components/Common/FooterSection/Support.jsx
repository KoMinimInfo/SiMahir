import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

const Support = () => {
  return (
    <div className="flex w-full flex-col justify-around gap-5 bg-primary p-10 text-center text-white sm:flex-row">
      <div className="space-y-4">
        <label className="text-lg font-medium">Akses Cepat</label>
        <ul className="space-y-3">
          <li>Home</li>
          <li>Booking</li>
          <li>Jadwal</li>
          <li>Chat</li>
        </ul>
      </div>
      <div className="space-y-4">
        <label className="text-lg font-medium">Dukungan</label>
        <ul className="space-y-3">
          <li>Pusat Layanan</li>
          <li>Syarat dan Ketentuan</li>
          <li>Kebijakan Privasi</li>
        </ul>
      </div>
      <div className="space-y-4">
        <label className="text-lg font-medium">Media Sosial</label>
        <ul className="flex justify-center gap-4">
          <li className="cursor-pointer">
            <RiFacebookCircleLine size={30} />
          </li>
          <li className="cursor-pointer">
            <FaInstagram size={30} />
          </li>
          <li className="cursor-pointer">
            <FaWhatsapp size={30} />
          </li>
          <li className="cursor-pointer">
            <CiLinkedin size={30} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Support;
