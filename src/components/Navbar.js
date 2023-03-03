import React from 'react';
import { useSelector } from 'react-redux';
import logoIMg from './../images/logo.png'

const Navbar = ({ setPageStatus }) => {
  const cartProductsQunt = useSelector(state => state.cart)
  return (
    <nav class="bg-[#171C2A] py-4">
      <div class="navBar">
        <a onClick={() => setPageStatus('Home')}>
          <img src={logoIMg} alt="LWS" class="max-w-[140px]" />
        </a>

        <div class="flex gap-4">
          <a class="navHome" id="lws-home" onClick={() => setPageStatus('Home')}> Home </a>
          <a class="navCart" id="lws-cart" onClick={() => setPageStatus('Cart')}>
            <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{cartProductsQunt.length}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;