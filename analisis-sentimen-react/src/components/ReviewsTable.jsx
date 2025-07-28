import React, { useState } from "react";

// Data ulasan (sebaiknya diletakkan di luar komponen jika tidak berubah)
const reviewsData = [
  {
    date: "2023-10-15",
    review:
      "Produknya sangat bagus dan berkualitas tinggi, harga sesuai dengan kualitasnya.",
    topics: "Kualitas, Harga",
    sentiment: "Positif",
    score: 0.87,
  },
  {
    date: "2023-10-14",
    review: "Pengiriman agak lambat tapi produknya sesuai deskripsi.",
    topics: "Pengiriman",
    sentiment: "Netral",
    score: 0.45,
  },
  {
    date: "2023-10-13",
    review: "Saya kecewa dengan produk ini, tidak sesuai dengan harganya.",
    topics: "Kualitas, Harga",
    sentiment: "Negatif",
    score: 0.12,
  },
  {
    date: "2023-10-12",
    review: "Desainnya keren dan modern, suka sekali!",
    topics: "Desain",
    sentiment: "Positif",
    score: 0.91,
  },
  {
    date: "2023-10-11",
    review: "Kemasan paketnya sangat aman dan rapi.",
    topics: "Kemasan",
    sentiment: "Positif",
    score: 0.85,
  },
];

const getSentimentBadge = (sentiment) => {
  const baseClasses =
    "px-2 inline-flex text-xs leading-5 font-semibold rounded-full";
  if (sentiment === "Positif")
    return `${baseClasses} bg-green-100 text-green-800`;
  if (sentiment === "Netral")
    return `${baseClasses} bg-yellow-100 text-yellow-800`;
  return `${baseClasses} bg-red-100 text-red-800`;
};

const ReviewsTable = () => {
  // 1. Buat state untuk setiap filter
  const [searchTerm, setSearchTerm] = useState("");
  const [sentimentFilter, setSentimentFilter] = useState("Semua Sentimen");
  const [topicFilter, setTopicFilter] = useState("Semua Topik");

  // 2. Logika untuk memfilter data berdasarkan state
  const filteredReviews = reviewsData.filter((item) => {
    const searchMatch = item.review
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const sentimentMatch =
      sentimentFilter === "Semua Sentimen" ||
      item.sentiment === sentimentFilter;
    const topicMatch =
      topicFilter === "Semua Topik" || item.topics.includes(topicFilter);

    return searchMatch && sentimentMatch && topicMatch;
  });

  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <h2 className="text-xl font-semibold text-gray-800">Data Ulasan</h2>
        <div className="flex flex-wrap gap-2">
          {/* Input Pencarian dengan event handler onChange */}
          <input
            type="text"
            placeholder="Cari ulasan..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Filter Sentimen dengan event handler onChange */}
          <select
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={sentimentFilter}
            onChange={(e) => setSentimentFilter(e.target.value)}
          >
            <option>Semua Sentimen</option>
            <option>Positif</option>
            <option>Netral</option>
            <option>Negatif</option>
          </select>
          {/* Filter Topik dengan event handler onChange */}
          <select
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={topicFilter}
            onChange={(e) => setTopicFilter(e.target.value)}
          >
            <option>Semua Topik</option>
            <option>Kualitas</option>
            <option>Harga</option>
            <option>Pengiriman</option>
            <option>Desain</option>
            <option>Layanan</option>
            <option>Kemasan</option>
          </select>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ulasan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Topik
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sentimen
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Skor
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* 3. Tampilkan data yang SUDAH DIFILTER */}
            {filteredReviews.length > 0 ? (
              filteredReviews.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.review}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.topics}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={getSentimentBadge(item.sentiment)}>
                      {item.sentiment}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.score}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  Tidak ada data yang cocok.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ReviewsTable;
