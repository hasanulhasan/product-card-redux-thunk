import { ADDTOCART, DECREMENT, DELETE, INCREMENT } from "./actionTypes";


const initialState = [
];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      return [...state, action.payload];

    // case ADDTOCART:
    //   return state.map(cart => {
    //     if (cart.length === 0 || cart.id !== action.payload.id) {
    //       return [...cart, action.payload]
    //     }
    //     return cart
    //   });

    case INCREMENT:
      return state.map(cart => {
        if (cart.id === action.payload.id) {
          return {
            ...cart,
            quantity: cart.quantity + 1
          }
        }
        return cart
      });
    case DECREMENT:
      return state.map(cart => {
        if (cart.id === action.payload.id) {
          return {
            ...cart,
            quantity: cart.quantity - 1
          }
        }
        return cart
      });

    case DELETE:
      return state.filter(cart => cart.id !== action.payload.id);

    default:
      return state
  }
}