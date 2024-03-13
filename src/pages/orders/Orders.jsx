import React, { useEffect, useState } from "react";
import { useMyContext } from "../../context/Context";
import TableData from "../../components/tableData/TableData";
import toast from "react-hot-toast";

const Orders = ({ productData, setProductData }) => {
  const { setopenMenu } = useMyContext();

  const columns = [
    {
      name: "Order Id",
      selector: (row) => `${row.orderId}`,
    },
    {
      name: "Order Date",
      selector: (row) => `${row.orderDate}`,
    },

    {
      name: "Customer Name",
      selector: (row) => `${row.customerName}`,
    },
    {
      name: "Product Id",
      selector: (row) => row.id,
    },
    {
      name: "Product Title",
      selector: (row) => row.title,
    },
    {
      name: "Status",
      selector: (row) => `${row.status}`,
    },

    {
      name: "Update",
      selector: (row) => (
        <>
          <select
            value={row.status}
            onChange={(e) => orderUpdateHandler(e, row.id)}
            className="bg-green-400 text-white font-semibold px-3 py-1 rounded-md"
          >
            <option value="Ordered">Ordered</option>
            <option value="Shipped">Shipped</option>
            <option value="InTransist">InTransist</option>
            <option value="Delivered">Delivered</option>
          </select>
        </>
      ),
    },
    {
      name: "Delete",
      selector: (row) => (
        <button
          onClick={() => deleteOrderHandler(row.id)}
          className=" bg-red-400 font-semibold px-3 rounded-md text-white py-1"
        >
          Delete
        </button>
      ),
    },
  ];

  const orderUpdateHandler = (e, id) => {
    const data = e.target.value;
    const filterData = productData.filter((item) => {
      if (item.id === id) {
        item.status = data;
      }
      return item;
    });
    setProductData(filterData);
    toast.success("Order Updated Successfully");
  };

  const deleteOrderHandler = (id) => {
    const filterData = productData.filter((item) => {
      if (item.id === id) {
        item.orderId = "";
        item.customerName = "";
      }
      return item;
    });
    setProductData(filterData);
    toast.success("Order Deleted Successfully");
  };

  useEffect(() => {
    setopenMenu("Orders");
  }, []);

  console.log(productData);
  return (
    <div className="w-full">
      <TableData
        title={"Orders"}
        data={productData ? productData.filter((item) => item.orderId) : []}
        columns={columns}
        pagination={true}
      />
    </div>
  );
};

export default Orders;
