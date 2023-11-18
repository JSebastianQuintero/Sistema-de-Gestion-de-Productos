import { addProduct } from "../../utils/products";
import "./productSelector.css";

export const ProductSelectorComponent = ({
  products,
  inventory,
  setInventory,
}) => {
  return (
    <div className="ProductSelectorComponent">
      <div className="tbl-header">
        <table>
          <thead>
            <tr>
              <th className="title-text">seleccionar nuevo producto</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table>
          <thead />
          <tbody>
            {products.map((item) => {
              return (
                <tr
                  key={item.id}
                  className="standard-text item-row"
                  onClick={() => {
                    addProduct(item, inventory, setInventory);
                  }}
                >
                  <td>{item.name}</td>
                  <td className="number-aling">${item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
