import React, { useEffect, useState } from "react";
import TableData from "../../components/tableData/TableData";
import { useMyContext } from "../../context/Context";
import toast from "react-hot-toast";
import EditProductModal from "../../components/products/EditProductModal";

const Products = ({ productData, setProductData }) => {
  const { setopenMenu } = useMyContext();
  const [editProductModal, setEditProductModal] = useState(false);
  const [editProductData, setEditProductData] = useState(null);

  const editProductHandler = (row) => {
    setEditProductData({
      id: row.id,
      thumbnail: row.thumbnail,
      title: row.title,
      price: row.price,
      discountPercentage: row.discountPercentage,
      category: row.category,
      rating: row.rating,
      stock: row.stock,
      description: row.description,
    });
    toggleEditProductModal();
  };

  const toggleEditProductModal = () => {
    setEditProductModal((prev) => !prev);
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      width: "60px",
    },
    {
      name: "Image",
      selector: (row) => (
        <div>
          <img src={row?.thumbnail} alt="" className="h-10 w-10" />
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
    {
      name: "Edit",
      selector: (row) => (
        <button
          onClick={() => editProductHandler(row)}
          className=" bg-green-400 px-3 font-semibold rounded-md text-white py-1"
        >
          Edit
        </button>
      ),
    },
    {
      name: "Delete",
      selector: (row) => (
        <button
          onClick={() => deleteProductHandler(row.id)}
          className=" bg-red-400 font-semibold px-3 rounded-md text-white py-1"
        >
          Delete
        </button>
      ),
    },
  ];

  const deleteProductHandler = (id) => {
    console.log(id);
    const filterData = productData.filter((item) => item.id !== id);
    setProductData(filterData);
    toast.success("Product Deleted Successfully");
  };

  useEffect(() => {
    setopenMenu("Product");
  }, []);

  return (
    <div className="w-full">
      <TableData
        title={"Products"}
        data={productData ? productData : []}
        columns={columns}
        pagination={true}
      />

      <EditProductModal
        toggleEditProductModal={toggleEditProductModal}
        editProductModal={editProductModal}
        editProductData={editProductData}
        productData={productData}
        setProductData={setProductData}
        setEditProductData={setEditProductData}
      />
    </div>
  );
};

export default Products;
