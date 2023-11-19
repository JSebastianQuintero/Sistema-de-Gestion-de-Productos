import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders all components", () => {
  render(<App />);

  // Check for ProductListComponent
  const productListElement = screen.getByText(/subtotal/i);
  expect(productListElement).toBeInTheDocument();

  // Check for ProductSelectorComponent
  const productSelectorElement = screen.getByText(
    /seleccionar nuevo producto/i
  );
  expect(productSelectorElement).toBeInTheDocument();

  // Check for PurchaseDetailsComponent
  const purchaseDetailsElement = screen.getByText(/Detalles de la compra/i);
  expect(purchaseDetailsElement).toBeInTheDocument();
});
