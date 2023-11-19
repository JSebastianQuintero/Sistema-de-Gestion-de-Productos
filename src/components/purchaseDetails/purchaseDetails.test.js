import { render, screen } from "@testing-library/react";
import { PurchaseDetailsComponent } from "./purchaseDetails";

const inventory = [
  { name: "Arroz blanco", price: 100, quantity: 1 },
  { name: "Gaseosa", price: 50, quantity: 2 },
  { name: "Fernet", price: 50, quantity: 3 },
];

test("renders correct quantity from inventory", () => {
  render(<PurchaseDetailsComponent inventory={inventory} />);

  // Check for quantity of items
  const quantityElem = screen.getByText(/cantidad de items: 6/i);
  expect(quantityElem).toBeInTheDocument();
});

test("renders correct total price from inventory", () => {
  render(<PurchaseDetailsComponent inventory={inventory} />);

  // Check for total price
  const totalPriceElem = screen.getByText(/precio total: \$350/i);
  expect(totalPriceElem).toBeInTheDocument();
});
