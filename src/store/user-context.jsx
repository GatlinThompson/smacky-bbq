import { createContext } from "react";

const UserContext = createContext({
  order: false,
  cart: [{ id: 1, qty: 1 }],
  address: "Main Street 1500 N Ogden, UT. USA",
  startOrder: () => {},
  updateAddress: () => {},
});

export default UserContext;
