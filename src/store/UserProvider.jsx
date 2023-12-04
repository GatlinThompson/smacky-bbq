import UserContext from "./user-context";
import { useEffect, useReducer } from "react";

const defaultUserState = {
  order: false,
  cart: [],
  address: "Main Street 1500 N Ogden, UT. USA",
};

const userReducer = (state, action) => {
  if ((action.type = "ORDER")) {
    return {
      ...state,
      order: action.order,
    };
  }

  if (action.type == "ADDRESS") {
    console.log("ASDASD");
    return {
      ...state,
      address: action.address,
    };
  }

  return defaultUserState;
};

const UserProvider = (props) => {
  const [userState, dispatchUserAction] = useReducer(
    userReducer,
    defaultUserState
  );

  const startOrderHandler = (order) => {
    dispatchUserAction({ type: "ORDER", order: order });
  };

  const updateAddressHandler = (address) => {
    dispatchUserAction({ type: "ADDRESS", address: address });
  };

  const userContext = {
    order: userState.order,
    address: userState.address,
    cart: userState.cart,
    startOrder: startOrderHandler,
    updateAddress: updateAddressHandler,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
