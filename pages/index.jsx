import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import Navbar from "../components/Sub-components/Navbar";
import Footer from "../components/Sub-components/Footer";
import Overview from "../components/Homepage/Overview";
import Authors from "../components/Homepage/Authors";
import Categories from "../components/Homepage/Categories";
import Introduction from "../components/Homepage/Introduction";

export default function Home() {
  

  return (
    <div>
      <Navbar />
      <section className="shadow-md  text-gray-600 body-font bg-zinc-800 min-h-screen">
        <Introduction />
        <Categories />
        <Authors />
        <Overview />
      </section>
      <Footer />
    </div>
  );
}
