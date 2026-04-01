import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeLayout from "./layouts/home_layout"
import ShopPage from "./pages/shop-page"
import WomenPage from "./pages/women-page"
import MenPage from "./pages/men-page"
import AboutPage from "./pages/about-page"
import Contactpage from "./pages/contact-page"
import HomePage from "./pages/home-page"
import ProductDetail from "./pages/product-detail"
import AuthLayout from "./layouts/Auth-layout"
import LoginPage from "./pages/auth/login-page"
import RegisterPage from "./pages/auth/register-page"



function App() {
  

  return (
   
     <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<HomeLayout />} >
         <Route path="/" element={<HomePage />} />
         <Route path="/product/:id" element={<ProductDetail />} />
         <Route path="/shop" element={<ShopPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contactpage />} />
        </Route>
            {/* Route Login */}
             <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
          
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
