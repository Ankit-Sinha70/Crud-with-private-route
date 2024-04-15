import { Box, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handlelogOut = () => {
    localStorage.removeItem("isSignedIn");
    navigate("/");
  };
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#d7dad8",
          padding: "20px",
          margin: "20px",
          borderRadius: "20px",
          fontSize: "20px",
          fontWeight: "700",
          boxShadow:
            "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        }}
      >
        {localStorage.getItem("isSignedIn") ? <Link to="/home">Home</Link> : ""}
        {localStorage.getItem("isSignedIn") ? (
          <Link to="/dashboard">Dashboard</Link>
        ) : (
          ""
        )}
        <Link to="/productlist">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/cartpage">Cart Page</Link>
        {localStorage.getItem("isSignedIn") ? (
          <Button onClick={handlelogOut}>LogOut</Button>
        ) : (
          <Button>LogIn</Button>
        )}
      </Box>
    </>
  );
};

export default Navbar;
