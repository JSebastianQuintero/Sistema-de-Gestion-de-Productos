import { useEffect } from "react";
import "./productList.css";

export const ProductListComponent = ({ inventory, setInventory }) => {
  return (
    <div className="ProductListComponent">
      <div className="tbl-header">
        <table>
          <thead>
            <tr>
              <th>cantidad</th>
              <th>descripcion</th>
              <th>subtotal</th>
              <th>total</th>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table>
          <tbody>
            {inventory.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <button>&lt;</button>
                    {item.quantity}
                    <button>&gt;</button>
                  </td>
                  <td>{item.name}</td>
                  <td className="number-aling">{item.price}</td>
                  <td className="number-aling">{item.price * item.quantity}</td>
                  <td>
                    <button>quitar</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
