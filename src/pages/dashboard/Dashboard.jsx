import React, { useEffect } from "react";
import Userdashboard from "../../components/dashboard/Userdashboard";
import { useMyContext } from "../../context/Context";
import TableData from "../../components/tableData/TableData";

const Dashboard = ({ productData }) => {
  const { setopenMenu } = useMyContext();

  console.log(productData);
  useEffect(() => {
    setopenMenu("Dashboard");
  }, []);

  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <div>
          <img src={row?.images[0]} alt="" className=" h-10 w-10" />
        </div>
      ),
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Price",
      selector: (row) => `${row.price} Rs`,
    },
    {
      name: "Discount",
      selector: (row) => `${row.discountPercentage} %`,
    },
    {
      name: "Category",
      selector: (row) => `${row.category} Rs`,
    },

    {
      name: "Rating",
      selector: (row) => row.rating,
    },
    {
      name: "Stock",
      selector: (row) => row.stock,
    },
  ];
  return (
    <div className=" flex flex-col">
      <Userdashboard />

      <TableData
        title={"Top 10 Products"}
        data={productData.slice(0, 10)}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default Dashboard;
