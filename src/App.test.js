import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders ProductListComponent", () => {
  render(<App />);

  const productListElement = screen.getByText(/subtotal/i);
  expect(productListElement).toBeInTheDocument();
});

test("renders ProductSelectorComponent", () => {
  render(<App />);

  const productSelectorElement = screen.getByText(
    /seleccionar nuevo producto/i
  );
  expect(productSelectorElement).toBeInTheDocument();
});

test("renders ProductListComponent", () => {
  render(<App />);

  const purchaseDetailsElement = screen.getByText(/Detalles de la compra/i);
  expect(purchaseDetailsElement).toBeInTheDocument();
});
