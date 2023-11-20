import { render, fireEvent } from "@testing-library/react";
import { ProductListComponent } from "./productList";

test("renders without crashing", () => {
  const inventory = [];
  const setInventory = jest.fn();

  render(
    <ProductListComponent inventory={inventory} setInventory={setInventory} />
  );
});

test("renders correct number of product items", () => {
  const inventory = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const setInventory = jest.fn();

  const { getAllByTestId } = render(
    <ProductListComponent inventory={inventory} setInventory={setInventory} />
  );

  const items = getAllByTestId("product-row");
  expect(items.length).toBe(inventory.length);
});

test("clicking on a product item calls removeProduct function", () => {
  const inventory = [{ id: 1 }];
  const setInventory = jest.fn();

  const { getByText } = render(
    <ProductListComponent inventory={inventory} setInventory={setInventory} />
  );

  fireEvent.click(getByText("X"));
  expect(setInventory).toHaveBeenCalled();
});
