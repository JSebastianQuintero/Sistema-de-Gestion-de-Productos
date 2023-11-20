import { useState } from "react";
import "./App.css";
import { ProductListComponent } from "./components/productList/productList";
import { ProductSelectorComponent } from "./components/productSelector/productSelector";

function App() {
  // list of products
  const [stock, setStock] = useState([
    { id: 1, name: "Arroz blanco", price: 100 },
    { id: 2, name: "Gaseosa", price: 80 },
    { id: 3, name: "Fernet", price: 150 },
    { id: 4, name: "Pan", price: 25 },
    { id: 5, name: "cafe", price: 50 },
  ]);
  // inventory
  const [inventory, setInventory] = useState([]);

  useState(() => {
    const storedInventory = localStorage.getItem("inventory");
    setInventory(storedInventory ? JSON.parse(storedInventory) : []);
  });

  return (
    <div className="App">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <div className="w3-row"></div>
      <div class="w3-col s12 l8 App">
        <ProductSelectorComponent
          products={stock}
          inventory={inventory}
          setInventory={setInventory}
        />
      </div>
      <div class="w3-col s12 l4 App">
        <ProductListComponent
          inventory={inventory}
          setInventory={setInventory}
        />
      </div>
    </div>
  );
}

export default App;
