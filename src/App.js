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
import WishlistSection from './pages/WishlistSection'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/ScrollToTop';
import CheckoutSection from './pages/checkout';
import { LoginContextProvider } from './context/LoginContext';
import PrivateRoute from './Auth/PrivateRoute';
import TrackSection from './pages/TrackSection';
import NotFound from './pages/NotFound';
import AboutSection from './pages/AboutSection';
import ContactSection from './components/ContactSection';



function App() {
  return (
    <LoginContextProvider>
      <div id="main-wrapper" className="main-wrapper overflow-hidden">
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<ProductList />} />
              <Route path="product-details/:prodId" element={<ProductDetails />} />
              <Route path="my-cart" element={<CartSection />}></Route>
              <Route path="wishlist" element={<WishlistSection />}></Route>
              <Route path="contact" element={<ContactSection />}></Route>
              <Route path="about-us" element={<AboutSection />}></Route>
              <Route path="checkout" element={<CheckoutSection />}></Route>
              <Route path="track-order" element={<PrivateRoute><TrackSection /> </PrivateRoute>}></Route>
              <Route path="*" element={<NotFound />} />
            </Route>

          </Routes>
        </Router>
        <ToastContainer
          position="top-right"
          autoClose={false}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          className="custom-toast"
        />
      </div>
    </LoginContextProvider>
  );
}

export default App;
