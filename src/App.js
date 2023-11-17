import { useState } from "react";
import "./App.css";
import { ProductListComponent } from "./components/productList/productList";
import { ProductSelectorComponent } from "./components/productSelector/productSelector";
import { PurchaseDetailsComponent } from "./components/purchaseDetails/purchaseDetails";

function App() {
  //list of products
  const [onSale, setOnSale] = useState([]);
  const [inventory, setInventory] = useState([
    { id: 1, name: "Item 1", price: 100, quantity: 1 },
    { id: 2, name: "Item 2", price: 200, quantity: 2 },
  ]);

  return (
    <div className="App">
      <ProductListComponent inventory={inventory} setInventory={setInventory} />
      <ProductSelectorComponent />
      <PurchaseDetailsComponent />
    </div>
  );
}

export default App;
