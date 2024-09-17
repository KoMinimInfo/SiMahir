const Copyright = ({ inLogInPage = false }) => {
  return (
    <div
      className={`${inLogInPage ? "absolute bottom-0" : ""} flex h-20 w-full items-center justify-center bg-[#003F62]`}
    >
      <p className="text-center text-white">
        Copyright © 2024 SI MAHIR| All Right Reserved
      </p>
    </div>
  );
};

export default Copyright;
