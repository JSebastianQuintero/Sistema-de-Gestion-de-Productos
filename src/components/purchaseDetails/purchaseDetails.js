import { countItems, getTotalPrice } from "../../utils/products";
import "./purchaseDetails.css";

export const PurchaseDetailsComponent = ({ inventory }) => {
  return (
    <div className="PurchaseDetailsComponent">
      <div className="title">Detalles de la compra</div>
      <div className="content">
        <span>cantidad de items: {countItems(inventory)}</span>
        <span>precio total: {getTotalPrice(inventory)}</span>
      </div>
    </div>
  );
};
