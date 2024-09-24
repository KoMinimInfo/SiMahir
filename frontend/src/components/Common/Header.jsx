import IconSiMahir from "../../assets/si-mahir.svg";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Hero from "../../assets/Hero.svg";

const Header = ({
  inLogInPage = false,
  inSignUpPage = false,
  isLoggedIn = false,
}) => {
  const navLink = [
    {
      to: "/home",
      text: "Home",
    },
    {
      to: "/booking",
      text: "Booking",
    },
    {
      to: "/jadwal",
      text: "Jadwal",
    },
    {
      to: "/chat",
      text: "Chat",
    },
    {
      to: "/faq",
      text: "FAQ",
    },
  ];

  return (
    <div className="fixed top-0 flex h-20 w-full items-center justify-between gap-5 bg-white px-6 shadow-lg">
      <img src={IconSiMahir} alt="Si Mahir" className="w-40" />

      {inLogInPage && (
        <Link
          to="/login"
          className="hidden rounded-xl bg-primary px-8 py-2 text-white sm:inline-block"
        >
          Login
        </Link>
      )}
      {inSignUpPage && (
        <Link
          to="/signup"
          className="hidden rounded-xl border-2 border-primary px-8 py-2 text-primary sm:inline-block"
        >
          Signup
        </Link>
      )}
      {isLoggedIn && (
        <>
          <div className="hidden h-full w-[500px] items-center justify-between text-lg font-medium sm:flex">
            {navLink.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive, isPending, isTransitioning }) =>
                  [isActive ? "text-orange-400 underline" : ""].join(
                    "flex h-full w-full items-center justify-center",
                  )
                }
              >
                {link.text}
              </NavLink>
            ))}
          </div>
          <div className="hidden w-11 sm:block">
            <img src={Hero} alt="hero" />
          </div>
        </>
      )}

      <FiMenu size={30} className="cursor-pointer sm:hidden" />
    </div>
  );
};

export default Header;
