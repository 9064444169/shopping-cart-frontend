import React from 'react';
import Product from '../Product';
import { Route, Switch } from 'react-router-dom';
import Cart from '../Cart';

const Linking = ({ productItems, cartItems, handleAddProduct, handleRemoveProduct }) => {
  return (
    <div>
        <Switch>
            <Route exact path="/" >
                <Product productItems={productItems} handleAddProduct={handleAddProduct} />
            </Route>
            <Route exact path="/cart">
               <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />
            </Route>
        </Switch>
    </div>
  );
};

export default Linking;