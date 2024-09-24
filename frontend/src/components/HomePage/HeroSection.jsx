import heroImage from "../../assets/heroImage.svg";

const HeroSection = () => {
  return (
    <div className="h-auto w-full bg-primary p-4">
      <section className="flex flex-col md:flex-row items-center justify-center h-full w-full">
    
        <img className="w-full md:w-3/12 mb-4 md:mb-0" src={heroImage} alt="Hero Image" />
        
        <div className="flex flex-col items-center md:items-start md:ml-10 w-full md:w-6/12">
          <h4 className="font-poppins text-white text-lg md:text-xl border border-white rounded-3xl px-4 md:px-5 py-2 inline-block">
            Fix Home
          </h4>
          <h1 className="text-4xl md:text-6xl font-poppins text-white font-medium mt-4">
            SI MAHIR
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-poppins text-white">
            SI MAHIR adalah platform yang memudahkan pengguna dalam memesan
            layanan perbaikan rumah, seperti instalasi listrik, pipa, dan
            renovasi. Dengan tenaga ahli berpengalaman, harga transparan, dan
            jadwal fleksibel, SI MAHIR menawarkan solusi perbaikan rumah yang
            cepat, efisien, dan berkualitas.
          </p>
          <button className="mb-5 mt-4 text-lg md:text-xl font-medium text-poppins text-primary hover:text-white bg-white hover:bg-orange-400 px-6 md:px-14 py-2 md:py-3 rounded-xl ">
            Lihat Jadwal
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
