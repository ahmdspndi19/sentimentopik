import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efek untuk mencegah scroll di body saat menu terbuka
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const activeStyle = {
    color: "#60a5fa", // Tailwind's blue-400
    fontWeight: "600",
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="bg-blue-800 text-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-5">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
              SentimenSignal
            </Link>

            {/* Navigasi untuk Desktop */}
            <nav className="hidden md:flex items-center space-x-6 text-sm">
              <NavLink
                to="/"
                className="hover:text-blue-200"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
              <NavLink
                to="/analisis-topik"
                className="hover:text-blue-200"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Analisis Topik
              </NavLink>
              <NavLink
                to="/analisis-sentimen"
                className="hover:text-blue-200"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Analisis Sentimen
              </NavLink>
              <NavLink
                to="/tabel-ulasan"
                className="hover:text-blue-200"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                DataSet
              </NavLink>
              <NavLink
                to="/analisis-lanjutan"
                className="hover:text-blue-200"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Demo
              </NavLink>
            </nav>

            {/* Tombol Hamburger untuk Mobile */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Menu Geser (Slide-Out Menu) untuk Mobile 
        Logika intinya ada di class `transform` dan `transition-transform`
      */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button onClick={closeMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-5 text-lg">
          <NavLink
            to="/"
            className="text-white hover:text-blue-200"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/analisis-topik"
            className="text-white hover:text-blue-200"
            onClick={closeMenu}
          >
            Analisis Topik
          </NavLink>
          <NavLink
            to="/analisis-sentimen"
            className="text-white hover:text-blue-200"
            onClick={closeMenu}
          >
            Analisis Sentimen
          </NavLink>
          <NavLink
            to="/tabel-ulasan"
            className="text-white hover:text-blue-200"
            onClick={closeMenu}
          >
            DataSet
          </NavLink>
          <NavLink
            to="/analisis-lanjutan"
            className="text-white hover:text-blue-200"
            onClick={closeMenu}
          >
            Demo
          </NavLink>
        </nav>
      </div>

      {/* Backdrop/Overlay di belakang menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
};

export default Header;
