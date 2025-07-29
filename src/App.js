import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import logo from './logo.svg';
import MainLayout from './layouts/MainLayout'
import './App.css';
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails'
import CartSection from './pages/CartSection'

function App() {
  return (
  <div id="main-wrapper" className="main-wrapper overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} /> 
             <Route path="products" element={<ProductList />} /> 
              <Route path="product-details/:prodId" element={<ProductDetails />} />   
              <Route path="my-cart" element={<CartSection />}></Route>    
          </Route>

        </Routes>
      </Router>
     </div>
  );
}

export default App;
