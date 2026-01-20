import { createContext } from "react";

const UserContext = createContext({
  order: false,
  cart: [],
  address: "Main Street 1500 N Ogden, UT. USA",
  deliveryType: "pickup", // pickup or delivery
  startOrder: () => {},
  updateAddress: () => {},
  setDeliveryType: () => {},
  addToCart: (item) => {},
  removeFromCart: (id) => {},
  updateQuantity: (id, quantity) => {},
  clearCart: () => {},
  getCartTotal: () => 0,
  getCartItemCount: () => 0,
});

export default UserContext;
