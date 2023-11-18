import { useState } from "react";
import "./App.css";
import { ProductListComponent } from "./components/productList/productList";
import { ProductSelectorComponent } from "./components/productSelector/productSelector";
import { PurchaseDetailsComponent } from "./components/purchaseDetails/purchaseDetails";

function App() {
  // list of products
  const [onSale, setOnSale] = useState([
    { id: 1, name: "Arroz blanco", price: 100 },
    { id: 2, name: "Gaseosa", price: 80 },
    { id: 3, name: "Fernet", price: 150 },
    { id: 4, name: "Pan", price: 25 },
    { id: 5, name: "cafe", price: 50 },
  ]);
  // inventory
  const [inventory, setInventory] = useState([]);

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
