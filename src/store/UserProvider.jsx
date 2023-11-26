// import UserContext from "./user-context";
// import { useEffect, useReducer } from "react";

// const defaultUserState = {
//   loggedIn: false,
//   cart: [],
//   totalAmount: 0,
//   name: "",
//   id: "",
// };

// const userReducer = (state, action) => {
//   //CLEAR USER DATA
//   if (action.type === "CLEAR") {
//     return defaultUserState;
//   }
//   //ADD ITEM
//   if (action.type == "ADD") {
//     const existingCartItemIndex = state.cart.findIndex(
//       (item) => item.itemID == action.item.itemID
//     );

//     const extistingCartItem = state.cart[existingCartItemIndex];

//     let updatedItems;

//     if (extistingCartItem) {
//       const updatedItem = {
//         ...extistingCartItem,
//         qty: extistingCartItem.qty + action.item.qty,
//       };

//       updatedItems = [...state.cart];
//       updatedItems[existingCartItemIndex] = updatedItem;
//     } else {
//       updatedItems = state.cart.concat(action.item);
//     }
//     //TotalAmount
//     let total = 0;

//     for (const index in updatedItems) {
//       let itemTotal = updatedItems[index].price * updatedItems[index].qty;
//       total += itemTotal;
//     }

//     return {
//       ...state,
//       cart: updatedItems,
//       totalAmount: total,
//     };
//   }

//   //LOWER ITEM
//   if (action.type == "SUBSTRACT") {
//     const itemIndex = state.cart.findIndex(
//       (item) => item.itemID == action.item.itemID
//     );

//     let updatedItems;

//     const extistingCartItem = state.cart[itemIndex];

//     const updatedItem = {
//       ...extistingCartItem,
//       qty: action.item.qty,
//     };

//     updatedItems = [...state.cart];

//     updatedItems[itemIndex] = updatedItem;
//     const reducedItems = updatedItems.filter((item) => item.qty > 0);

//     //TotalAmount
//     let total = 0;

//     for (const index in updatedItems) {
//       let itemTotal = updatedItems[index].price * updatedItems[index].qty;
//       total += itemTotal;
//     }

//     return { ...state, cart: reducedItems, totalAmount: total };
//   }

//   //SETUP CART
//   if (action.type == "SETCART") {
//     return {
//       ...state,
//       cart: action.item,
//     };
//   }

//   if (action.type == "SETTOTAL") {
//     let total = 0;
//     for (const index in action.item) {
//       let itemTotal = action.item[index].price * action.item[index].qty;
//       total += itemTotal;
//     }
//     return {
//       ...state,
//       totalAmount: total,
//     };
//   }

//   //USER LOGIN
//   if (action.type == "LOGIN") {
//     let name = action.name;
//     if (action.name.length > 8) {
//       let shortName = action.name.slice(0, 8);
//       shortName = shortName + "...";
//       name = shortName;
//     }
//     return {
//       ...state,
//       loggedIn: true,
//       name: name,
//       id: action.id,
//     };
//   }

//   //USER ORDERED
//   if ((action.type = "ORDER")) {
//     return {
//       ...state,
//       cart: [],
//       totalAmount: 0,
//     };
//   }

//   return defaultUserState;
// };

const UserProvider = (props) => {
  //   const [userState, dispatchUserAction] = useReducer(
  //     userReducer,
  //     defaultUserState
  //   );
  //   const clearUserHandler = () => {
  //     dispatchUserAction({ type: "CLEAR" });
  //   };
  //   const addItemToCartHandler = (item) => {
  //     dispatchUserAction({ type: "ADD", item: item });
  //   };
  //   const lowerItemToCartHandler = (item) => {
  //     dispatchUserAction({ type: "SUBSTRACT", item: item });
  //   };
  //   const getLoggedInHandler = (name, id) => {
  //     dispatchUserAction({ type: "LOGIN", name: name, id: id });
  //   };
  //   const orderCartHandler = () => {
  //     dispatchUserAction({ type: "ORDER" });
  //   };
  //   const userContext = {
  //     loggedIn: userState.loggedIn,
  //     cart: userState.cart,
  //     totalAmount: userState.totalAmount,
  //     name: userState.name,
  //     id: userState.id,
  //     clearUser: clearUserHandler,
  //     addItem: addItemToCartHandler,
  //     lowerItem: lowerItemToCartHandler,
  //     login: getLoggedInHandler,
  //     getCart: getCartHandler,
  //     order: orderCartHandler,
  //   };
  //   return (
  //     <UserContext.Provider value={userContext}>
  //       {props.children}
  //     </UserContext.Provider>
  //   );
};

export default UserProvider;
