import { ADDTOCART, DECREMENT, DELETE, INCREMENT } from "./actionTypes"


export const addToCart = (product) => {
  return {
    type: ADDTOCART,
    payload: product
  }
}

export const increment = (product) => {
  return {
    type: INCREMENT,
    payload: product
  }
}
export const decrement = (product) => {
  return {
    type: DECREMENT,
    payload: product
  }
}
export const deleteItem = (product) => {
  return {
    type: DELETE,
    payload: product
  }
}