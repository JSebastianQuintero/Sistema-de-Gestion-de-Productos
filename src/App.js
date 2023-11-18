import { useState } from "react";
import "./App.css";
import { ProductListComponent } from "./components/productList/productList";
import { ProductSelectorComponent } from "./components/productSelector/productSelector";
import { PurchaseDetailsComponent } from "./components/purchaseDetails/purchaseDetails";

function App() {
  // list of products
  const [onSale, setOnSale] = useState([
    { id: 1, name: "Item 1", price: 100 },
    { id: 2, name: "Item 2", price: 200 },
    { id: 3, name: "Item 3", price: 300 },
    { id: 4, name: "Item 4", price: 400 },
    { id: 5, name: "Item 1", price: 100 },
    { id: 6, name: "Item 2", price: 200 },
    { id: 7, name: "Item 3", price: 300 },
    { id: 8, name: "Item 4", price: 400 },
    { id: 9, name: "Item 1", price: 100 },
    { id: 10, name: "Item 2", price: 200 },
    { id: 11, name: "Item 3", price: 300 },
    { id: 12, name: "Item 4", price: 400 },
  ]);
  // inventory
  const [inventory, setInventory] = useState([
    { id: 1, name: "Item 1", price: 100, quantity: 1 },
    { id: 2, name: "Item 2", price: 200, quantity: 2 },
    { id: 3, name: "Item 2", price: 200, quantity: 2 },
    { id: 4, name: "Item 2", price: 200, quantity: 2 },
    { id: 5, name: "Item 2", price: 200, quantity: 2 },
    { id: 6, name: "Item 2", price: 200, quantity: 2 },
    { id: 7, name: "Item 2", price: 200, quantity: 2 },
    { id: 8, name: "Item 2", price: 200, quantity: 2 },
    { id: 9, name: "Item 2", price: 200, quantity: 2 },
    { id: 10, name: "Item 2", price: 200, quantity: 2 },
    { id: 11, name: "Item 2", price: 200, quantity: 2 },
    { id: 12, name: "Item 2", price: 200, quantity: 2 },
    { id: 13, name: "Item 2", price: 200, quantity: 2 },
    { id: 14, name: "Item 2", price: 200, quantity: 2 },
    { id: 15, name: "Item 2", price: 200, quantity: 2 },
  ]);

  return (
    <div className="App">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <div className="main-table">
        <ProductListComponent
          inventory={inventory}
          setInventory={setInventory}
        />
      </div>
      <div className="sub-tables">
        <ProductSelectorComponent
          products={onSale}
          inventory={inventory}
          setInventory={setInventory}
        />
        <PurchaseDetailsComponent inventory={inventory} />
      </div>
    </div>
  );
}

export default App;
