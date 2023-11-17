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
