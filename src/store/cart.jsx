const cart = {
  address: "Main Street 1500 N Ogden, UT. USA",
  cart: [],
  stage: "looking",
  order: false,
};
const updateAddress = (address) => {
  // Update the cart object with new data
  cart.address = address;
};
const updateOrder = (order) => {
  // Update the cart object with new data
  cart.order = order;
};

export { cart, updateAddress, updateOrder };
