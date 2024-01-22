import React, { useState } from "react";
import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";

import pic from "../../img/pic.jpg";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../data";
import { Link } from "react-router-dom";
function Productlist() {
  const [productdata, setproductdata] = useState(productRows);

  const handledelete = (id) => {
    setproductdata(productdata.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,

      renderCell: (params) => {
        return (
          <div className="productlistitem">
            <img className="productlistImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productlistedit">Edit</button>
            </Link>

            <ClearIcon
              className="productlistdelete"
              onClick={() => handledelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productlist">
      <DataGrid
        rows={productdata}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default Productlist;
