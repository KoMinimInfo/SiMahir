import CarouselPortfolio from '../PortfolioPage/CarouselPortfolio';

const PortfolioSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 py-20">
      <h1 className="text-primary font-poppins font-semibold text-3xl sm:text-3xl md:text-4xl">Si Mahir</h1>
      <p className="text-gray-400 mt-10 w-8/12 font-poppins text-xm md:text-xl;w-5/12">Selamat datang di halaman Portofolio kami! Di sini, Anda dapat melihat berbagai layanan perbaikan dan perawatan rumah
        yang telah berhasil kami tangani bersama para penyedia layanan profesional. 
        Dari pekerjaan ringan hingga proyek perbaikan besar, Si Mahir selalu berkomitmen untuk memberikan
        hasil terbaik bagi setiap pelanggan. Berikut beberapa contoh proyek yang telah kami selesaikan:</p>
      <div className='py-10 '>
        <CarouselPortfolio/>
      </div>
    
      <p className="text-gray-400 w-8/12 font-poppins text-xm md:text-xl;w-5/12">Mengapa Memilih Si Mahir?</p>
      <p className="text-gray-400 w-8/12 font-poppins text-xm md:text-xl;w-5/12">Si Mahir bangga menjadi mitra Anda dalam setiap proyek perbaikan dan perawatan rumah. Kami menjamin kualitas layanan terbaik, penyedia yang berpengalaman, dan kepuasan pelanggan pada setiap pekerjaan yang dilakukan. Apapun kebutuhan Anda, Si Mahir siap memberikan solusi yang cepat, handal, dan terjangkau.
      Jika Anda ingin melihat lebih banyak proyek yang telah kami kerjakan atau ingin menghubungi penyedia layanan kami, jangan ragu untuk menghubungi kami atau memesan layanan melalui platform ini.</p>
    
    </div>
      
  );
};

export default PortfolioSection;
