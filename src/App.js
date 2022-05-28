import React,{ useState } from 'react';
import data from './components/backEnd/Data';
import Header from './components/frontEnd/Header';
import { BrowserRouter as Router} from 'react-router-dom';
import Linking from './components/frontEnd/Routess/Linking';


const App = () => {
  const  { productItems } = data;
  const [cartItems,setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? {...ProductExist,quantity: ProductExist.quantity + 1} : item)
      );
    }else{
        setCartItems([...cartItems,{...product,quantity: 1}]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }else{
      setCartItems(
        cartItems.map((item) => 
        item.id === product.id 
        ? {...ProductExist, quantity:ProductExist.quantity - 1 }:item
        )
      )
    }
  }

  return (
    <div>
      <Router>
        <Header />
        <Linking productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />
      </Router>
    </div>
  );

};

export default App;
