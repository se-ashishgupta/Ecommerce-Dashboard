import React from "react";
import "./Userdashboard.css";
import BarGraph from "./BarChart";
import Line1Graph from "./LineChart1";
import Line2Graph from "./LineChart2";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaChartBar, FaRupeeSign, FaUserPlus } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import TableData from "../tableData/TableData";

const Userdashboard = () => {
  return (
    <div className="">
      {/* Four Box  */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 transition-all duration-300">
        {/* Box 1  */}
        <div className="relative dark:bg-darkBackPrimary_color bg-white rounded-xl shadow-xl mt-4">
          {/* Small box with Icon  */}
          <div className="absolute left-4 -top-5 bg-black text-white p-6 rounded-xl">
            <figure className=" text-2xl">
              <MdOutlineLibraryBooks />
            </figure>
          </div>

          {/* Text Data Content  */}
          <div className="p-2 shadow-sm">
            <div className="row">
              <div>
                <div className=" text-right">
                  <p className="text-lg text-gray-400"> Total Products</p>
                  <h5 className="font-bold text-3xl dark:text-white text-gray-800">
                    18,100
                  </h5>
                </div>
                <hr className="line-style my-[1.5rem]"></hr>
                <div className=" flex items-center gap-1">
                  <p className=" text-green-600 text-lg font-semibold">+55%</p>
                  <p className="text-lg text-gray-400"> than last week</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2  */}
        <div className="relative dark:bg-darkBackPrimary_color bg-white rounded-xl shadow-xl mt-4">
          {/* Small box with Icon  */}
          <div className="absolute left-4 -top-5 bg-blue-500 text-white p-6 rounded-xl">
            <figure className=" text-2xl">
              <FaChartBar />
            </figure>
          </div>

          {/* Text Data Content  */}
          <div className="p-2 shadow-sm">
            <div className="row">
              <div>
                <div className=" text-right">
                  <p className="text-lg text-gray-400"> Total Orders</p>
                  <h5 className="font-bold text-3xl dark:text-white text-gray-800">
                    2,300
                  </h5>
                </div>
                <hr className="line-style my-[1.5rem]"></hr>
                <div className=" flex items-center gap-1">
                  <p className=" text-green-600 text-lg font-semibold">+3%</p>
                  <p className="text-lg text-gray-400"> than last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box 3  */}
        <div className="relative dark:bg-darkBackPrimary_color bg-white rounded-xl shadow-xl mt-4">
          {/* Small box with Icon  */}
          <div className="absolute left-4 -top-5 bg-green-600 text-white p-6 rounded-xl">
            <figure className=" text-2xl">
              <FaRupeeSign />
            </figure>
          </div>

          {/* Text Data Content  */}
          <div className="p-2 shadow-sm">
            <div className="row">
              <div>
                <div className=" text-right">
                  <p className="text-lg text-gray-400"> Total Delivered</p>
                  <h5 className="font-bold text-3xl dark:text-white text-gray-800">
                    5,000
                  </h5>
                </div>
                <hr className="line-style my-[1.5rem]"></hr>
                <div className=" flex items-center gap-1">
                  <p className=" text-green-600 text-lg font-semibold">+1%</p>
                  <p className="text-lg text-gray-400"> than last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box 4  */}
        <div className="relative dark:bg-darkBackPrimary_color bg-white rounded-xl shadow-xl mt-4">
          {/* Small box with Icon  */}
          <div className="absolute left-4 -top-5 bg-pink-700 text-white p-6 rounded-xl">
            <figure className=" text-2xl">
              <FaUserPlus />
            </figure>
          </div>

          {/* Text Data Content  */}
          <div className="p-2 shadow-sm">
            <div className="row">
              <div>
                <div className=" text-right">
                  <p className="text-lg text-gray-400"> Today's Order</p>
                  <h5 className="font-bold text-3xl dark:text-white text-gray-800">
                    91
                  </h5>
                </div>
                <hr className="line-style my-[1.5rem]"></hr>
                <div className=" flex items-center gap-1">
                  <p className=" text-green-600 text-lg font-semibold">+4%</p>
                  <p className="text-lg text-gray-400"> than yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts  */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-24 transition-all duration-300">
        <div className="p-1 relative dark:bg-darkBackPrimary_color bg-white rounded-2xl mt-16">
          {/* Chart  */}
          <div className="p-4 shadow-sm">
            <BarGraph />
          </div>

          {/* Text  */}
          <div className="px-4 py-5">
            <div className="">
              <p className="font-bold text-gray-800">Daily Orders</p>
              <h5 className="text-gray-400">Numbers are in lakhs</h5>
            </div>
            <hr className="line-style my-[1rem]"></hr>
            <div className=" flex items-center gap-1">
              <figure className=" text-gray-400">
                <AiOutlineClockCircle />
              </figure>
              <p className=" text-gray-400"> updated one day ago</p>
            </div>
          </div>
        </div>

        <div className="p-1 relative dark:bg-darkBackPrimary_color bg-white rounded-2xl mt-16">
          {/* Chart  */}
          <div className="p-4 shadow-sm">
            <Line1Graph />
          </div>

          {/* Text  */}
          <div className="px-4 py-5">
            <div className="">
              <p className="font-bold text-gray-800">Monthly Orders</p>
              <h5 className="text-gray-400">
                <span className=" font-semibold text-green-600">(-15%)</span>{" "}
                increase in current month.
              </h5>
            </div>
            <hr className="line-style my-[1rem]"></hr>
            <div className=" flex items-center gap-1">
              <figure className=" text-gray-400">
                <AiOutlineClockCircle />
              </figure>
              <p className=" text-gray-400">updated 4 min ago</p>
            </div>
          </div>
        </div>

        <div className="p-1 relative dark:bg-darkBackPrimary_color bg-white rounded-2xl mt-16">
          {/* Chart  */}
          <div className="p-4 shadow-sm">
            <Line2Graph />
          </div>

          {/* Text  */}
          <div className="px-4 py-5">
            <div className="">
              <p className="font-bold text-gray-800">Yearly Order</p>
              <h5 className="text-gray-400">
                <span className=" font-semibold text-green-600">(-10%)</span>{" "}
                decrease in defaulters.
              </h5>
            </div>
            <hr className="line-style my-[1rem]"></hr>
            <div className=" flex items-center gap-1">
              <figure className=" text-gray-400">
                <AiOutlineClockCircle />
              </figure>
              <p className=" text-gray-400">updated 10 min ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdashboard;
