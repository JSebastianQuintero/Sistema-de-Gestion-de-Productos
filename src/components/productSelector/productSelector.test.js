import { render, fireEvent } from "@testing-library/react";
import { ProductSelectorComponent } from "./productSelector";
import { addProduct } from "../../utils/products";

jest.mock("../../utils/products", () => ({
  addProduct: jest.fn(),
}));

test("renders without crashing", () => {
  const products = [];
  const inventory = [];
  const setInventory = jest.fn();

  render(
    <ProductSelectorComponent
      products={products}
      inventory={inventory}
      setInventory={setInventory}
    />
  );
});

test("renders correct number of product items", () => {
  const products = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const inventory = [];
  const setInventory = jest.fn();

  const { getAllByTestId } = render(
    <ProductSelectorComponent
      products={products}
      inventory={inventory}
      setInventory={setInventory}
    />
  );

  const items = getAllByTestId("product-row");
  expect(items.length).toBe(products.length);
});

test("clicking on a product item calls addProduct function", () => {
  const products = [{ id: 1 }];
  const inventory = [];
  const setInventory = jest.fn();

  const { getByText } = render(
    <ProductSelectorComponent
      products={products}
      inventory={inventory}
      setInventory={setInventory}
    />
  );

  fireEvent.click(getByText("Agregar"));
  expect(addProduct).toHaveBeenCalled();
});
