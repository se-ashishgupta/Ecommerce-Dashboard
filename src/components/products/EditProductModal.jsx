import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import InputField from "./InputField";
import toast from "react-hot-toast";

const EditProductModal = ({
  editProductModal,
  toggleEditProductModal,
  editProductData,
  setEditProductData,
  productData,
  setProductData,
}) => {
  const editProductHandler = (e) => {
    e.preventDefault();
    const filterData = productData.filter((item) => {
      if (item.id === editProductData.id) {
        item.thumbnail = editProductData.thumbnail;
        item.title = editProductData.title;
        item.price = editProductData.price;
        item.discountPercentage = editProductData.discountPercentage;
        item.category = editProductData.category;
        item.rating = editProductData.rating;
        item.stock = editProductData.stock;
        item.description = editProductData.description;
      }
      return item;
    });

    console.log(filterData);
    setProductData(filterData);
    toast.success("Order Updated Successfully");
    toggleEditProductModal();
  };
  return (
    <>
      {/*Edit Product Model  */}

      <div
        className={` ${
          editProductModal ? "fixed" : "hidden"
        } fixed top-0 left-0 w-[100%] h-[100%] z-40 flex  justify-center`}
      >
        {/* OverLay  */}
        <div className="absolute w-[100%] h-[100%] bg-black opacity-25"></div>

        {/* Conetnt  */}
        <div className=" bg-white rounded-lg w-[90%] md:w-[60%] h-[80%] overflow-y-scroll  p-2 absolute z-10  mt-10">
          {/* Model Header  */}
          <div className=" bg-backPrimary_color  p-3 border-blue-800 rounded flex items-center justify-between">
            <h1 className="text-white text-xl font-semibold">Edit Product</h1>
            <span
              className=" text-white text-xl cursor-pointer"
              onClick={toggleEditProductModal}
            >
              <MdOutlineClose />
            </span>
          </div>

          {/* Modal Body  */}
          <div className="px-2 py-1  my-2 h-[100%] border-purple-800 rounded">
            <form
              onSubmit={editProductHandler}
              className=" space-y-3"
              id="myForm"
            >
              <InputField
                label={"ID"}
                placeholder={"Product Id"}
                type="text"
                value={editProductData?.id}
                disable={true}
              />

              <InputField
                label={"Thumbnail Url"}
                placeholder={"Product Thumbnail"}
                type="text"
                value={editProductData?.thumbnail}
                setFunction={setEditProductData}
                name="thumbnail"
              />
              <InputField
                label={"Title"}
                placeholder={"Product Title"}
                type="text"
                value={editProductData?.title}
                setFunction={setEditProductData}
                name="title"
              />

              <InputField
                label={"Price"}
                placeholder={"Product Price"}
                type="number"
                value={editProductData?.price}
                setFunction={setEditProductData}
                name="price"
              />
              <InputField
                label={"Discount"}
                placeholder={"Product Discount"}
                type="number"
                value={editProductData?.discountPercentage}
                setFunction={setEditProductData}
                name="discountPercentage"
              />
              <InputField
                label={"Category"}
                placeholder={"Product Category"}
                type="text"
                value={editProductData?.category}
                setFunction={setEditProductData}
                name=""
              />
              <InputField
                label={"Rating"}
                placeholder={"Product Rating"}
                type="number"
                value={editProductData?.rating}
                setFunction={setEditProductData}
                name="category"
              />
              <InputField
                label={"Stock"}
                placeholder={"Product Stock"}
                type="number"
                value={editProductData?.stock}
                setFunction={setEditProductData}
                name="stock"
              />

              <div className=" flex flex-col gap-1 rounded">
                <label htmlFor="" className=" font-semibold">
                  Description
                </label>
                <textarea
                  type="text"
                  value={editProductData?.description}
                  setFunction={setEditProductData}
                  name=""
                  className="border-2 rounded p-1 flex-1 focus:ring-2 focus:ring-gray-800 outline-none"
                />
              </div>

              <div className=" py-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggleEditProductModal}
                  className="p-3 rounded bg-backPrimary_color text-white font-bold hover:bg-transparenttransition-all duration-300 w-full"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="p-3 rounded  bg-backPrimary_color modelHeadingBackground text-white font-bold hover:bg-transparenttransition-all duration-300 w-full"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProductModal;
