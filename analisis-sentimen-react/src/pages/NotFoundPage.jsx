// src/pages/NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-6xl font-bold text-blue-800">404</h1>
      <p className="text-2xl font-semibold text-gray-700 mt-4">
        Halaman Tidak Ditemukan
      </p>
      <p className="text-gray-500 mt-2">
        Maaf, halaman yang Anda cari tidak ada.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Kembali ke Halaman Utama
      </Link>
    </div>
  );
};

export default NotFoundPage;
