import "./App.css";
import {
  Route,
  Routes,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Cart } from "./pages/cart/index";
import { PageNotfound } from "./pages/Page-Not-found";
import { Product } from "./pages/product";
import { Products } from "./pages/products";

function App() {
  const navigate = useNavigate();

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`);
  };

  return (
    <div>
      <Navbar onSearch={onSearch} cartItemsCount={2} />
      <div className="text-3xl text-center">
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotfound />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
