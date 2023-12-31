import { addProduct } from "../../utils/products";
import "./productSelector.css";

export const ProductSelectorComponent = ({
  products,
  inventory,
  setInventory,
}) => {
  return (
    <div className="ProductSelectorComponent">
      <div className="title-bar">
        <table className="full-height">
          <thead>
            <tr>
              <th>seleccionar nuevo producto</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="stock-list-bottom">
        <table>
          <thead />
          <tbody>
            {products.map((item) => {
              return (
                <tr
                  key={item.id}
                  className="list-function"
                  data-testid="product-row"
                  onClick={() => {
                    addProduct(item, inventory, setInventory);
                  }}
                >
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
