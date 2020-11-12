import React,  { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Catalog from './components/Catalog/Catalog'


const App = () => {
  const [products, setProducts] = useState([]);
  const  AddProductToCart = (data) => {
      setProducts([data, ...products])
  }
  return (
      <section>
        <Header products={products} />
          <Catalog AddProductToCart={AddProductToCart} />
      </section>
  )
}

export default App
