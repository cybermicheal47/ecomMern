import React, { useEffect, useState } from "react";
import { popularProducts } from "../data";
import styled from "styled-components";
import SingleProduct from "./SingleProduct";
import { useLocation } from "react-router-dom";
import axios from "axios";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ catName, filter, sort }) => {
  console.log(catName, filter, sort);
  const [products, setproducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const results = await axios.get(
          catName
            ? `http://localhost:3500/api/products?category=${catName}`
            : " http://localhost:3500/api/products"
        );
        console.log(results);
        setproducts(results.data);
      } catch (error) {}
    };
    getProducts();
  }, [catName]);

  useEffect(() => {
    if (catName && Array.isArray(products)) {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    }
  }, [products, catName, filter]);
  console.log(filteredProducts);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, []);
  return (
    <Container>
      {catName
        ? filteredProducts.map((item) => (
            <SingleProduct item={item} key={item._id} />
          ))
        : products
            .slice(0, 8)
            .map((item) => <SingleProduct item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
