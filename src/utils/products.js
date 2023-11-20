// Desc: Utility functions for products
export function incrementQuantity(itemID, inventory, setInventory) {
  const newInventory = inventory.map((item) => {
    if (item.id === itemID) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  setInventory(newInventory);
  localStorage.setItem("inventory", JSON.stringify(newInventory));
}

export function removeProduct(itemID, inventory, setInventory) {
  const newInventory = inventory.filter((item) => item.id !== itemID);
  setInventory(newInventory);
  localStorage.setItem("inventory", JSON.stringify(newInventory));
}

// Desc: Utility functions for purchase details

export function countItems(inventory) {
  return inventory.reduce((acc, item) => acc + item.quantity, 0);
}

export function getTotalPrice(inventory) {
  return inventory.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

// Desc: Utility functions for product selector

export function addProduct(item, inventory, setInventory) {
  let found = false;
  inventory.forEach((inventoryItem) => {
    if (inventoryItem.id === item.id) {
      found = true;
    }
  });
  if (found) {
    incrementQuantity(item.id, inventory, setInventory);
  } else {
    const newInventory = [...inventory, { ...item, quantity: 1 }];
    setInventory(newInventory);
    localStorage.setItem("inventory", JSON.stringify(newInventory));
  }
}
