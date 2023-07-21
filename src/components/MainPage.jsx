import React from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../redux/productsApi";
import ProductSearch from "./ProductSearch";

function MainPage() {
  return (
    <div className="bg-slate-400">
      <div>
      <ProductSearch/>
      </div>
    </div>
  );
}

export default MainPage;
