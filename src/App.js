
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar.js'

import Cart from './components/Cart.js'





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
   
          <Route path="/cart" exact component={Cart} /> 
         
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
