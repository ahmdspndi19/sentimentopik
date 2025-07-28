import React from "react";

// 1. Import komponen yang dibutuhkan
import DashboardCard from "../components/DashboardCard";
import KeyInsights from "../components/KeyInsights";

const HomePage = () => {
  return (
    // Menggunakan div dengan space-y untuk memberi jarak antar section
    <div className="space-y-12">
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Ringkasan Analisis
          </h2>
          <select
            id="topicFilter"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Semua Topik</option>
            <option value="kualitas">Kualitas</option>
            <option value="harga">Harga</option>
            <option value="pengiriman">Pengiriman</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardCard
            title="Total Ulasan"
            value="1,254"
            detail="12% dari bulan lalu"
            borderColor="border-blue-500"
            showArrow={true}
          />
          <DashboardCard
            title="Sentimen Positif"
            value="823"
            detail="(65.6%)"
            borderColor="border-green-500"
          />
          <DashboardCard
            title="Sentimen Netral"
            value="312"
            detail="(24.9%)"
            borderColor="border-yellow-500"
          />
          <DashboardCard
            title="Sentimen Negatif"
            value="119"
            detail="(9.5%)"
            borderColor="border-red-500"
          />
        </div>
      </section>
      <KeyInsights />
    </div>
  );
};

export default HomePage;
