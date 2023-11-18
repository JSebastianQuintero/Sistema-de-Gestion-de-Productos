import "./productList.css";
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from "../../utils/products";

export const ProductListComponent = ({ inventory, setInventory }) => {
  return (
    <div className="ProductListComponent">
      <div className="tbl-header">
        <table>
          <thead>
            <tr>
              <th className="title-text">cantidad</th>
              <th className="title-text">descripcion</th>
              <th className="title-text">subtotal</th>
              <th className="title-text">total</th>
              <th className="title-text"></th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table>
          <tbody>
            {inventory.map((item) => {
              return (
                <tr key={item.id} className="standard-text">
                  <td>
                    <button
                      onClick={() => {
                        decrementQuantity(item.id, inventory, setInventory);
                      }}
                    >
                      &lt;
                    </button>
                    {item.quantity}
                    <button
                      onClick={() => {
                        incrementQuantity(item.id, inventory, setInventory);
                      }}
                    >
                      &gt;
                    </button>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      onClick={() => {
                        removeProduct(item.id, inventory, setInventory);
                      }}
                    >
                      quitar
                    </button>
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
