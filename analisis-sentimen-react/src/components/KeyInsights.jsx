import React from "react";

const KeyInsights = () => {
  return (
    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Key Insights</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>
          <span className="font-medium">
            65.6% ulasan menunjukkan sentimen positif
          </span>
          , dengan topik utama terkait kualitas dan harga produk
        </li>
        <li>
          Sentimen negatif (
          <span className="text-red-500 font-medium">9.5%</span>) paling sering
          muncul terkait masalah pengiriman dan kemasan
        </li>
        <li>
          Trend sentimen positif meningkat{" "}
          <span className="text-green-500 font-medium">8%</span> dibandingkan
          bulan sebelumnya
        </li>
        <li>
          Topik "kualitas" muncul pada <span className="font-medium">42%</span>{" "}
          dari seluruh ulasan yang dianalisis
        </li>
        <li>
          Sentimen netral cenderung berasal dari ulasan yang membahas pengiriman
          tanpa komentar spesifik tentang produk
        </li>
      </ul>
    </section>
  );
};

export default KeyInsights;
