import { Routes, Route } from "react-router-dom";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import PrivateRoute from "./PrivateRoute";
import UpdatePage from "../pages/UpdatePage";
import ErrorPage from "../pages/ErrorPage";
import ProductList from "../pages/ProductList";
import { useState } from "react";
import CartPage from "../pages/CartPage";


interface AllRoutesProps {}

const AllRoutes: React.FC<AllRoutesProps> = () => {

  const [cart, setCart] = useState<any[]>([]);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/edit/:id" element={< UpdatePage/>}/>
          <Route path="/productlist" element={< ProductList cart={cart} setCart={setCart}/>}/>
          <Route path="/cartpage" element={<CartPage cart={cart} setCart={setCart} />} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </div>
    </>
  );
};

export default AllRoutes;
