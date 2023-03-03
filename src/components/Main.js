import React from 'react';
import Cart from './Cart';
import Home from './Home';

const Main = ({ pageStatus }) => {
  if (pageStatus === "Home") {
    return (<div>
      <Home />
    </div>
    );
  }
  else {
    return (<div>
      <Cart />
    </div>
    );
  }
};

export default Main;