import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Cart/action';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  const { id, name, category, img, price, quantity } = product
  return (
    <div class="lws-productCard">
      <img class="lws-productImage" src="https://i.dummyjson.com/data/products/40/thumbnail.jpg" alt="product" />
      <div class="p-4 space-y-2">
        <h4 class="lws-productName">{name}</h4>
        <p class="lws-productCategory">{category}</p>
        <div class="flex items-center justify-between pb-2">
          <p class="productPrice">BDT <span class="lws-price">{price}</span></p>
          <p class="productQuantity">QTY <span class="lws-quantity">{quantity}</span></p>
        </div>
        <button disabled={quantity === 0 ? true : false} class="lws-btnAddToCart" onClick={() => handleAddToCart(product)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;