import "./productList.css";
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from "../../utils/products";

export const ProductListComponent = ({ inventory, setInventory }) => {
  return (
    <div className="ProductListComponent">
      <div className="title-bar">
        <table className="full-height">
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
      <div className="product-list-bottom">
        <table>
          <tbody>
            {inventory.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <button
                      className="styled-button"
                      onClick={() => {
                        decrementQuantity(item.id, inventory, setInventory);
                      }}
                    >
                      &lt;
                    </button>
                    {item.quantity}
                    <button
                      className="styled-button"
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
                      className="styled-button"
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
