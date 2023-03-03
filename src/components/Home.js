import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/Home/action';
import Product from './Product';

const Home = () => {
  const products = useSelector(state => state.home)
  const dispatch = useDispatch();
  console.log('from home', products);

  const handleProducts = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const img = form.imgUrl.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const product = { name, category, img, price, quantity }
    dispatch(addProduct(product));
    form.reset();
    console.log(product);
  }
  return (
    <main class="py-16">
      <div class="productWrapper">
        {/* <!-- products container --> */}
        <div class="productContainer" id="lws-productContainer">
          {/* <!-- product item --> */}
          {
            products.map(product => <Product key={product.id} product={product} />)
          }
          {/* <!-- product item ends --> */}
        </div>
        {/* <!-- products container ends --> */}
        <div>
          {/* <!-- Product Input Form --> */}
          <div class="formContainer">
            <h4 class="formTitle">Add New Product</h4>
            <form class="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={handleProducts}>
              {/* <!-- product name --> */}
              <div class="space-y-2">
                <label for="lws-inputName">Product Name</label>
                <input name='name' class="addProductInput" id="lws-inputName" type="text" required />
              </div>
              {/* <!-- product category --> */}
              <div class="space-y-2">
                <label for="lws-inputCategory">Category</label>
                <input name='category' class="addProductInput" id="lws-inputCategory" type="text" required />
              </div>
              {/* <!-- product image url --> */}
              <div class="space-y-2">
                <label for="lws-inputImage">Image Url</label>
                <input name='imgUrl' class="addProductInput" id="lws-inputImage" type="text" required />
              </div>
              {/* <!-- price & quantity container --> */}
              <div class="grid grid-cols-2 gap-8 pb-4">
                {/* <!-- price --> */}
                <div class="space-y-2">
                  <label for="ws-inputPrice">Price</label>
                  <input name='price' class="addProductInput" type="number" id="lws-inputPrice" required />
                </div>
                {/* <!-- quantity --> */}
                <div class="space-y-2">
                  <label for="lws-inputQuantity">Quantity</label>
                  <input name='quantity' class="addProductInput" type="number" id="lws-inputQuantity" required />
                </div>
              </div>
              {/* <!-- submit button --> */}
              <button type="submit" id="lws-inputSubmit" class="submit">Add Product</button>
            </form>
          </div>
          {/* <!-- Product Input Form Ends --> */}
        </div>
      </div>
    </main>

  );

};

export default Home;