import { Nav } from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import { Products } from "./components/Products";
import { Login } from "./components/Login";
import { Cart } from "./components/Cart";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <Nav></Nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
