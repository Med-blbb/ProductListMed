import React, { useEffect, useState } from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";

export default function AllLists() {
  const [lists, setLists] = useState([]);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const handleOnChangeProduct = (e) => {
    setProduct(e.target.value);
  };
  const handleOnChangePrice = (e, index) => {
    const newLists = [...lists];
    newLists[index].inputPrice = e.target.value;
    setLists(newLists);
  };
  const editPrice = (id) => {
    const newLists = [...lists];
    newLists[id].price = 0;
    setLists(newLists);
  };
  const editQuantity = (id) => {
    const newLists = [...lists];
    newLists[id].quantity = 0;
    setLists(newLists);
  };
  const setPrice1 = (index) => {
    const newLists = [...lists];
    newLists[index].price = newLists[index].inputPrice || "";
    newLists[index].inputPrice = undefined;
    setLists(newLists);
  };
  const handleOnChangeQuantity = (e, index) => {
    const newLists = [...lists];
    newLists[index].inputQuantity = e.target.value;
    setLists(newLists);
  };

  const setQuantity1 = (index) => {
    const newLists = [...lists];
    newLists[index].quantity = newLists[index].inputQuantity || 0;
    newLists[index].inputQuantity = undefined;
    setLists(newLists);
  };
  const AddProduct = () => {
    if (product !== "") {
      setLists([
        ...lists,
        {
          title: product,
          quantity: quantity,
          price: price,
          inputQuantity: undefined,
          inputPrice: undefined,
        },
      ]);
      setProduct("");
      setPrice(0);
      setQuantity(0);
    }
  };
  const deleteProduct = (id) => {
    setLists((lists) => lists.filter((prd, index) => index !== id));
  };
  useEffect(() => {}, [lists]);

  return (
    <div>
      <div>
        <Header
          handleOnChangeProduct={handleOnChangeProduct}
          product={product}
          AddProduct={AddProduct}
        />
      </div>
      <div>
        <List
          lists={lists}
          handleOnChangeQuantity={handleOnChangeQuantity}
          setQuantity={setQuantity}
          setQuantity1={setQuantity1}
          handleOnChangePrice={handleOnChangePrice}
          setPrice1={setPrice1}
          editPrice={editPrice}
          editQuantity={editQuantity}
          deleteProduct={deleteProduct}
        />
      </div>
    </div>
  );
}
