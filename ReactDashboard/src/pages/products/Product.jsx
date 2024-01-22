import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/charts/Chart";
import { productData } from "../../data";
import pic from "../../img/pic.jpg";
import { Publish } from "@mui/icons-material";
function Product() {
  return (
    <div className="product">
      <div className="producttilecontainer">
        <h1 className="productTitle"> Product</h1>
        <Link to="/newproduct">
          <button className="addProductButton"> Add New Product</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>

        <div className="productTopRight">
          <div className="productTopRightInfo"></div>
          <img src={pic} className="productTopimg" />
          <span className="productName"> IPHONE</span>
          <div className="productTopRightBottom">
            <div className="productTopRightItem">
              <span className="productTopRightKey">id:</span>
              <span className="productTopRightValue">12</span>
            </div>
            <div className="productTopRightItem">
              <span className="productTopRightKey">sales:</span>
              <span className="productTopRightValue">51233</span>
            </div>
            <div className="productTopRightItem">
              <span className="productTopRightKey">active:</span>
              <span className="productTopRightValue">yes</span>
            </div>
            <div className="productTopRightItem">
              <span className="productTopRightKey">in stock:</span>
              <span className="productTopRightValue">no</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder=" Fan" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={pic} alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
