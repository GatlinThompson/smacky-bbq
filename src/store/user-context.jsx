import { createContext } from "react";

const UserContext = createContext({
  order: false,
  cart: [],
  address: "Main Street 1500 N Ogden, UT. USA",
  startOrder: () => {},
  updateAddress: () => {},
});

export default UserContext;
