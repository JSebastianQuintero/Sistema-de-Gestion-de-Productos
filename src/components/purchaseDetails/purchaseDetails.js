import { countItems, getTotalPrice } from "../../utils/products";
import "./purchaseDetails.css";

export const PurchaseDetailsComponent = ({ inventory }) => {
  return (
    <div className="PurchaseDetailsComponent">
      <div className="title title-text">Detalles de la compra</div>
      <div className="content">
        <span className="standard-text">
          cantidad de items: {countItems(inventory)}
        </span>
        <span className="standard-text">
          precio total: ${getTotalPrice(inventory)}
        </span>
      </div>
    </div>
  );
};
