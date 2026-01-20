import UserContext from "./user-context";
import { useEffect, useReducer } from "react";
import menu from "./menu";

const defaultUserState = {
  order: false,
  cart: [],
  address: "Main Street 1500 N Ogden, UT. USA",
  deliveryType: "pickup",
};

const userReducer = (state, action) => {
  if (action.type === "ORDER") {
    return {
      ...state,
      order: action.order,
    };
  }

  if (action.type === "ADDRESS") {
    return {
      ...state,
      address: action.address,
    };
  }

  if (action.type === "DELIVERY_TYPE") {
    return {
      ...state,
      deliveryType: action.deliveryType,
    };
  }

  if (action.type === "ADD_TO_CART") {
    const existingItemIndex = state.cart.findIndex(
      (item) => item.id === action.item.id,
    );

    if (existingItemIndex >= 0) {
      // Item already exists, update quantity
      const updatedCart = [...state.cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity:
          updatedCart[existingItemIndex].quantity + action.item.quantity,
      };
      return {
        ...state,
        cart: updatedCart,
      };
    } else {
      // New item, add to cart
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    }
  }

  if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.id),
    };
  }

  if (action.type === "UPDATE_QUANTITY") {
    const updatedCart = state.cart.map((item) =>
      item.id === action.id ? { ...item, quantity: action.quantity } : item,
    );
    return {
      ...state,
      cart: updatedCart.filter((item) => item.quantity > 0),
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
      order: false,
    };
  }

  return defaultUserState;
};

const UserProvider = (props) => {
  const [userState, dispatchUserAction] = useReducer(
    userReducer,
    defaultUserState,
  );

  const startOrderHandler = (order) => {
    dispatchUserAction({ type: "ORDER", order: order });
  };

  const updateAddressHandler = (address) => {
    dispatchUserAction({ type: "ADDRESS", address: address });
  };

  const setDeliveryTypeHandler = (deliveryType) => {
    dispatchUserAction({ type: "DELIVERY_TYPE", deliveryType: deliveryType });
  };

  const addToCartHandler = (item) => {
    // item should have: { id, quantity, customizations (optional) }
    const menuItem = menu.find((menuItem) => menuItem.id === item.id);
    if (!menuItem) return;

    const cartItem = {
      id: menuItem.id,
      title: menuItem.title,
      price: menuItem.special ? menuItem.specialPrice : menuItem.price,
      originalPrice: menuItem.price,
      special: menuItem.special,
      type: menuItem.type,
      alt: menuItem.alt,
      quantity: item.quantity || 1,
      customizations: item.customizations || null,
    };

    dispatchUserAction({ type: "ADD_TO_CART", item: cartItem });
  };

  const removeFromCartHandler = (id) => {
    dispatchUserAction({ type: "REMOVE_FROM_CART", id: id });
  };

  const updateQuantityHandler = (id, quantity) => {
    dispatchUserAction({ type: "UPDATE_QUANTITY", id: id, quantity: quantity });
  };

  const clearCartHandler = () => {
    dispatchUserAction({ type: "CLEAR_CART" });
  };

  const getCartTotal = () => {
    return userState.cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const getCartItemCount = () => {
    return userState.cart.reduce((count, item) => {
      return count + item.quantity;
    }, 0);
  };

  const userContext = {
    order: userState.order,
    address: userState.address,
    deliveryType: userState.deliveryType,
    cart: userState.cart,
    startOrder: startOrderHandler,
    updateAddress: updateAddressHandler,
    setDeliveryType: setDeliveryTypeHandler,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    updateQuantity: updateQuantityHandler,
    clearCart: clearCartHandler,
    getCartTotal: getCartTotal,
    getCartItemCount: getCartItemCount,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
