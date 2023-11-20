// Desc: Utility functions for products
export function incrementQuantity(itemID, stock, setStock) {
  const newInventory = stock.map((item) => {
    if (item.id === itemID) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  setStock(newInventory);
}

export function decrementQuantity(itemID, stock, setStock) {
  const newInventory = stock
    .map((item) => {
      if (item.id === itemID) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    })
    .filter((item) => item.quantity > 0);
  setStock(newInventory);
}

export function removeProduct(itemID, stock, setStock) {
  const newInventory = stock.filter((item) => item.id !== itemID);
  setStock(newInventory);
}

// Desc: Utility functions for purchase details

export function countItems(stock) {
  return stock.reduce((acc, item) => acc + item.quantity, 0);
}

export function getTotalPrice(stock) {
  return stock.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

// Desc: Utility functions for product selector

export function addProduct(item, stock, setStock) {
  let found = false;
  stock.forEach((inventoryItem) => {
    if (inventoryItem.id === item.id) {
      found = true;
    }
  });
  if (found) {
    incrementQuantity(item.id, stock, setStock);
  } else {
    setStock([...stock, { ...item, quantity: 1 }]);
  }
}
