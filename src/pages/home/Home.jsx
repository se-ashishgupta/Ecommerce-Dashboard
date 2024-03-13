import React, { useEffect, useState } from "react";
import Sidebar from "../../components/layouts/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Topbar from "../../components/layouts/Topbar";
import { useMyContext } from "../../context/Context";
import Footer from "../../components/layouts/Footer";
import SettingSidebar from "../../components/dashboard/SettingSidebar";
import axios from "axios";
import Products from "../products/Products";
import { ProductData } from "../../data/productData";
import Orders from "../orders/Orders";

const Home = () => {
  const { openSidebar, openSettingSidebar } = useMyContext();
  const [productData, setProductData] = useState(ProductData);

  const filter = productData.map((item, index) => ({
    ...item,
    orderId: "",
    customerName: "",
  }));

  console.log(filter);
  return (
    <div className="p-4 flex h-screen xl:gap-5 dark:bg-darkBackTeritiary_color  bg-gray-200 overflow-auto ">
      {/* Sidebar Layout  */}
      <div className="sticky top-0 left-0 z-20">
        <div
          className={`absolute h-full xl:sticky w-[15rem] dark:bg-darkBackPrimary_color bg-backPrimary_color rounded-xl overflow-hidden ${
            openSidebar ? " translate-x-0" : "translate-x-[-110%]"
          }  xl:translate-x-0 transition-all duration-300`}
        >
          <Sidebar />
        </div>
      </div>

      {/* Content Layout  */}
      <div className="w-full xl:flex-1">
        <div className="p-1">
          <Topbar title={"Dashboard"} />
          <Routes>
            <Route path="/" element={<Dashboard productData={productData} />} />
            <Route
              path="/products"
              element={
                <Products
                  productData={productData}
                  setProductData={setProductData}
                />
              }
            />
            <Route
              path="/orders"
              element={
                <Orders
                  productData={productData}
                  setProductData={setProductData}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </div>

      {/* Setting SideNavbar  */}
      <div
        className={`fixed right-0 top-0 h-full z-20 shadow-xl transition-all duration-300  ${
          openSettingSidebar ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <SettingSidebar />
      </div>
    </div>
  );
};

export default Home;
