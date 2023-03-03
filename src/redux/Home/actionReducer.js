import { ADDTOCART, DECREMENT, INCREMENT } from "../Cart/actionTypes"
import { ADDPRODUCT } from "./actionTypes"

const initialState = [
  {
    id: 1,
    name: "Kalo Pant",
    category: 'Pant',
    img: 'img-url',
    price: 345,
    quantity: 2
  },
  {
    id: 2,
    name: "Lal Top",
    category: 'Top',
    img: 'img-url',
    price: 246,
    quantity: 6
  }
]

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return [...state,
      {
        id: nextTodoId(state),
        name: action.payload.name,
        category: action.payload.category,
        img: action.payload.img,
        price: action.payload.price,
        quantity: parseInt(action.payload.quantity)
      }
      ]
    case ADDTOCART:
      return state.map(product => {
        if (product.id === action.payload.id) {
          if (product.quantity <= 0) { return product }
          return {
            ...product,
            quantity: product.quantity - 1
          }
        }
        return product
      })

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

    default:
      return state
  }
}