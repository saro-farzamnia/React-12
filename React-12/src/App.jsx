import { BrowserRouter, Routes, Route, Navigate } from "react-router"
// import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"
import NotFound from "./pages/404"
import ProductDetails from "./pages/ProductDetails"
// import Landeng from "./pages/Landeng"
import AboutUs2 from "./pages/AboutUs2"
import Programer2 from "./pages/Programer2"
import Programer1 from "./pages/Programer1"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomePage/>} />  //هردو درست هم اولی هو دومی */}
          <Route index element={<HomePage/>} />
          <Route path="about-us" element={<AboutUs/>} />
          <Route  path="products" element={<Products/>} />
          <Route path="*" element={<NotFound/>} />
          {/* <Route path="landing-page" element={<Landeng/>} /> */}
          <Route path="landing-page" element={<Navigate to="/" replace />} /> //روش دوم
          <Route path="about-us2" element={<AboutUs2/>} >
            <Route path="programer1" element={<Programer1/>} />
            <Route path="programer2" element={<Programer2/>} />
            <Route path="programer3" element={<h2>Programer3</h2>} />
          </Route>
          <Route path="/products/:id" element={<ProductDetails/>} />
        </Routes>
      </BrowserRouter>


      {/* <Routes>
        
      </Routes> */}
    </>
  )
}

export default App
