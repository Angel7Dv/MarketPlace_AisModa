import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductView from "./components/ProductView";
import Login from "./components/Login";
import Cart from "./components/Cart";
function App() {
  return (
    <>
      <Router>

        <Navbar />

        <Routes>

          <Route path="/" element={<HomePage />}/>
          <Route path="productview/" element={<ProductView/>}/>
          <Route path="register/" element={<Register/>}/>
          <Route path="login/" element={<Login/>}/>
          <Route path="cart/" element={<Cart/>}/>
          

        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
