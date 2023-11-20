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
              <th>Ticket</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="product-list-bottom">
        <table>
          <tbody>
            {inventory.map((item) => {
              return (
                <tr key={item.id} data-testid="product-row">
                  <td>
                    <button
                      className="styled-button"
                      onClick={() => {
                        removeProduct(item.id, inventory, setInventory);
                      }}
                    >
                      X
                    </button>
                  </td>
                  <td>{item.name}</td>
                  <td>x{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
