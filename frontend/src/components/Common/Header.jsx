import IconSiMahir from "../../assets/si-mahir.svg";
import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiEdit, FiLock, FiShield, FiLogOut, FiMail, FiUser } from "react-icons/fi";
import Hero from "../../assets/hero.svg";
import axios from 'axios';

const Header = ({
  inLogInPage = false,
  inSignUpPage = false,
  isLoggedIn = false,
}) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

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

  const handleLogout = () => {
    navigate('/login');
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("/api/user");
        
        if (response.data) {
          setId(response.data.id);
          setFullName(response.data.name);
          setPhoneNumber(response.data.phone);
          setAddress(response.data.address);
          setEmail(response.data.email);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    if (isLoggedIn) {
      fetchUserData();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 flex h-20 w-full items-center justify-between gap-5 bg-white px-6 shadow-l z-10">
      <Link to="/portfolio">
        <img src={IconSiMahir} alt="Si Mahir" className="w-40 cursor-pointer" />
      </Link>

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
              <NavLink key={link.to} to={link.to} className={({ isActive }) =>
                [isActive ? "border-b-4 border-orange-400 text-orange-400" : ""].join(
                  "flex h-full w-full items-center justify-center"
                )
              }>
                {link.text}
              </NavLink>
            ))}
          </div>
          
          <div className="hidden sm:block relative" ref={menuRef}>
            <img 
              src={Hero} 
              alt="hero" 
              className="w-11 h-11 rounded-full cursor-pointer"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            />

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <img src={Hero} alt="Profile" className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold text-gray-800">{fullName}</p>
                      <p className="text-xs text-gray-500">{email}</p>
                    </div>
                  </div>
                </div>

                <div className="py-2">
                  <Link to="/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <FiEdit className="mr-3" />
                    Edit Profile
                  </Link>
                  <Link to="/password" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <FiLock className="mr-3" />
                    Password
                  </Link>
                  <Link to="/security" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <FiShield className="mr-3" />
                    Keamanan
                  </Link>
                  
                  <div className="border-t border-gray-100 my-2"></div>
                  
                  <button 
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-50"
                  >
                    <FiLogOut className="mr-3" />
                    Keluar
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      <FiMenu size={30} className="cursor-pointer sm:hidden" />
    </div>
  );
};

export default Header;
