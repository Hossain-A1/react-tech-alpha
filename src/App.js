import { Route, Routes } from "react-router-dom";
import Navber from "./components/Navber";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <div className="app min-h-screen bg-gray-50 text-gray-600 
      ">
        <Navber />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
