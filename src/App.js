import "./App.css";
import { ProductListComponent } from "./components/productList/productList";
import { ProductSelectorComponent } from "./components/productSelector/productSelector";
import { PurchaseDetailsComponent } from "./components/purchaseDetails/purchaseDetails";

function App() {
  return (
    <div className="App">
      <ProductListComponent />
      <ProductSelectorComponent />
      <PurchaseDetailsComponent />
    </div>
  );
}

export default App;
