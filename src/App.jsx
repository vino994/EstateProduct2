import React, { Component }  from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
function App() {
  return (
  <>
    <h1 className='header'>Header</h1>
    <hr></hr>
    <Navbar />
     <Switch>
     <Route exact path="/Products/" component={Products} />
      <Route exact path="/Products/:id" component={Product} />
     </Switch>
    
  </>
  );
}

export default App;
