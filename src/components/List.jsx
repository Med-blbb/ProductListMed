import React from "react";
import { BsPencil } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
export default function List({
  lists,
  handleOnChangeQuantity,
  setQuantity1,
  handleOnChangePrice,
  setPrice1,
  editPrice,
  editQuantity,
  deleteProduct,
}) {
  return (
    <div className="container mt-4">
      <table className="table table-light table-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {lists.map((prd, index) => (
            <tr key={index}>
              <td>{prd.title}</td>
              <td>
                {prd.quantity > 0 ? (
                  prd.quantity
                ) : (
                  <input
                    type="number"
                    className="w-25 form-control"
                    value={prd.inputQuantity || ""}
                    onChange={(e) => handleOnChangeQuantity(e, index)}
                    onBlur={() => setQuantity1(index)}
                  />
                )}{" "}
                {prd.quantity > 0 ? (
                  <button
                    className="btn me-1 h1 btn-secondary"
                    onClick={() => {
                      editQuantity(index);
                    }}
                  >
                    {" "}
                    <BsPencil />
                  </button>
                ) : (
                  ""
                )}
              </td>
              <td>
                {prd.price > 0 ? "$" : ""}
                {prd.price > 0 ? (
                  prd.price * prd.quantity
                ) : (
                  <input
                    type="number"
                    className="w-25 form-control"
                    value={prd.inputPrice || ""}
                    onChange={(e) => handleOnChangePrice(e, index)}
                    onBlur={() => setPrice1(index)}
                  />
                )}{" "}
                {prd.price > 0 ? (
                  <button
                    className="btn me-1 h1 btn-secondary"
                    onClick={() => {
                      editPrice(index);
                    }}
                  >
                    {" "}
                    <BsPencil />
                  </button>
                ) : (
                  ""
                )}
              </td>
              <td>
                <button
                  onClick={() => deleteProduct(index)}
                  className="btn btn-danger"
                >
                  <RxCross1 />
                </button>
              </td>
            </tr>
          ))}
          {lists.length > 0 ? (
            <tr>
              <th>Total Price </th>
              <td>
                $
                {lists.reduce(
                  (sum, l) => sum + (Number(l.price * l.quantity) || 0),
                  0
                )}
              </td>
              <td></td>
              <td></td>
            </tr>
          ) : (
            ""
          )}
        </tbody>
      </table>
    </div>
  );
}
