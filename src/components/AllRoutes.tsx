import { Routes, Route } from "react-router-dom";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import PrivateRoute from "./PrivateRoute";
import UpdatePage from "../pages/UpdatePage";
import ErrorPage from "../pages/ErrorPage";

const AllRoutes = () => {
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
          {/* <Route path="/productlist" element={< ProductList/>}/> */}
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </div>
    </>
  );
};

export default AllRoutes;
