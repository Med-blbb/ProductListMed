import React from "react";

export default function Header({ handleOnChangeProduct, product, AddProduct }) {
  return (
    <div className="container mt-3">
      <h2 className="text-info">Products</h2>
      <div className="mt-3 w-75 input-group">
        <input
          onChange={handleOnChangeProduct}
          value={product}
          type="text"
          placeholder="Enter Your Product"
          className="form-control"
        />
        <button onClick={() => AddProduct()} className="btn btn-info mx-2">
          Add Product
        </button>
      </div>
    </div>
  );
}
