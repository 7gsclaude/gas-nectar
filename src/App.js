
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar.js'
import Home from './components/home.js'
import About from './components/about.js'
import Cart from './components/cart.js'
import Login from './components/login.js'




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/cart" exact component={Cart} /> 
           <Route path="/login" component={Login} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
