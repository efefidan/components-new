"use client";
import React, { useState, useEffect } from "react";
import UserStats from "@/components/UserStats";
import StatisticChart from "@/components/StatisticChart";
import LicenseExpireList from "@/components/LicenseExpireList";

const HomePage = () => {
  const [memoryUsage, setMemoryUsage] = useState(65);
  const [diskUsage, setDiskUsage] = useState(75);

  useEffect(() => {
    // Burada bir backend ya da database API'sinden veri çekebilirsin.
    // setMemoryUsage ile dinamik veri güncellemesi yapılabilir.
  }, []);

  return (
    <div className="container mx-auto p-4">
      <UserStats /> {/* Kullanıcı istatistiklerini gösteren kısım */}

      {/* Inline style ile lisans kısmını sağa alıyoruz */}
      <div style={{ display: "inline-block", width: "75%" }}> {/* Sol tarafta StatisticChart */}
        <StatisticChart />
      </div>

      <div style={{ display: "inline-block", width: "25%", float: "right" }}> {/* Sağ tarafta LicenseExpireList */}
        <LicenseExpireList />
      </div>
    </div>
  );
};

export default HomePage;
