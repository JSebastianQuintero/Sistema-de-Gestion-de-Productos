// Desc: Utility functions for products
export function incrementQuantity(itemID, inventory, setInventory) {
  const newInventory = inventory.map((item) => {
    if (item.id === itemID) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  setInventory(newInventory);
}

export function decrementQuantity(itemID, inventory, setInventory) {
  const newInventory = inventory
    .map((item) => {
      if (item.id === itemID) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    })
    .filter((item) => item.quantity > 0);
  setInventory(newInventory);
}

export function removeProduct(itemID, inventory, setInventory) {
  const newInventory = inventory.filter((item) => item.id !== itemID);
  setInventory(newInventory);
}

// Desc: Utility functions for purchase details

export function countItems(inventory) {
  return inventory.reduce((acc, item) => acc + item.quantity, 0);
}

export function getTotalPrice(inventory) {
  return inventory.reduce((acc, item) => acc + item.price * item.quantity, 0);
}
