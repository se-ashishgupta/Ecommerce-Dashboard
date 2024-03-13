import React from "react";
import DataTable from "react-data-table-component";

const TableData = ({ title, data, columns, pagination = true }) => {
  const tableCustomStyles = {
    headRow: {
      style: {
        background: "#3b82f6",
        color: "#ffffff",
        fontWeight: "38px",
        fontSize: "14px",
        borderRadius: "5px",
        minHeight: "41px",
      },
    },
    rows: {
      style: {
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: "#42bbff",
        "&:not(:last-of-type)": {
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
          borderBottomColor: "#42bbff",
        },
      },
    },
  };

  return (
    <>
      <h1 className="py-4 text-xl font-bold dark:text-white">{title}</h1>
      <DataTable
        columns={columns}
        data={data ? data : []}
        pagination={pagination}
        // selectableRows
        customStyles={tableCustomStyles}
        responsive={true}
      />
    </>
  );
};

export default TableData;
