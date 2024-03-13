import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import {
  MdDashboard,
  MdLibraryBooks,
  MdNotifications,
  MdOutlineDashboard,
} from "react-icons/md";
import { BiSolidUser, BiSolidUserDetail } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useMyContext } from "../../context/Context";

const Sidebar = () => {
  const { setopenSidebar, activeMenu, setActiveMenu } = useMyContext();

  const navItem = [
    {
      title: "Dashboard",
      icon: <MdDashboard />,
      path: "/",
    },
    {
      title: "Products",
      icon: <BiSolidUserDetail />,
      path: "/products",
    },
    {
      title: "Orders",
      icon: <MdLibraryBooks />,
      path: "/orders",
    },
    {
      title: "Calender",
      icon: <MdNotifications />,
      path: "/calender",
    },
  ];

  const closeSidebar = () => {
    setopenSidebar((prev) => !prev);
  };

  return (
    <section>
      {/* Logo */}
      <div className="border-b m-6 mb-2 pb-8 px-2 flex items-center justify-between">
        {/* Logo with name  */}
        <div className="mr-2 flex items-center gap-1">
          <img src={logo} alt="logo" className="h-8" />
          <h1 className="text-white font-bold text-sm">Ecommerce Dashboard</h1>
        </div>
        {/* Close Button  */}
        <figure
          className="xl:hidden cursor-pointer text-gray-300 text-3xl border rounded-lg"
          onClick={closeSidebar}
        >
          <IoIosClose />
        </figure>
      </div>

      {/* NavItem  */}
      <div className="p-4">
        <nav className=" text-white flex flex-col gap-1">
          {navItem.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`rounded-lg px-4 py-3 ${
                activeMenu == item.path ? " bg-blue-500" : "hover:bg-gray-500"
              } transition-all duration-200`}
              onClick={() => setActiveMenu(item.path)}
            >
              <div className=" flex items-center gap-4 ">
                <figure className="text-2xl">{item.icon}</figure>
                <h1>{item.title}</h1>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Sidebar;
