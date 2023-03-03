import { ADDPRODUCT } from "./actionTypes"

export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product
  }
}