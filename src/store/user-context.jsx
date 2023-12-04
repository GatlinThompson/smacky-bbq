import { createContext } from "react";
import { updateAddress } from "./cart";

const UserContext = createContext({
  order: false,
  cart: [],
  address: "Main Street 1500 N Ogden, UT. USA",
  startOrder: () => {},
  updateAddress: () => {},
});

export default UserContext;
