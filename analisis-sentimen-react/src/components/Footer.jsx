import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Tentang Analisis</h3>
            <p className="text-gray-300 text-sm">
              Dashboard ini menampilkan hasil analisis topik modeling dan
              sentimen dari 1,254 ulasan produk periode Oktober 2023 menggunakan
              algoritma TOP2VEC dan LSTM.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Email: analisis@contoh.com</li>
              <li>Telepon: (021) 12345678</li>
              <li>Alamat: Jl. Analisis No. 123, Jakarta</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Sumber Data</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Ulasan E-commerce</li>
              <li>Survei Kepuasan Pelanggan</li>
              <li>Media Sosial</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© 2023 Tim Analisis Data. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
