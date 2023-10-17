import { Box, Button, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogIn = (): any => {
  const navigate = useNavigate();
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const value = localStorage.getItem("token");
    const data = JSON.parse(value as any);
    if (values?.email === data?.username && values?.password === data?.password) {
      localStorage.setItem("isSignedIn", true as any);
      navigate("/home");
    } else {
      alert("Please enter Valid Password");
    }
  };
  return (
    <>
      <Box
        sx={{
          width: "40%",
          margin: "50px",
          borderRadius: "20px",
          backgroundColor: "#d7dad8",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        <Box sx={{ margin: "20px", padding: "30px" }}>
          <form onSubmit={handleSubmit}>
            <FormLabel>Email</FormLabel>
            <Input
              variant="flushed"
              type="email"
              name="email"
              placeholder="Enter your email address"
              onChange={handleChange}
            />
            <br />
            <br />
            <FormLabel>Password</FormLabel>
            <Input
              variant="flushed"
              type="text"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
            <br />
            <br />
            <Button colorScheme="teal" type="submit">
              Submit
            </Button>
          </form>

          <Link style={{ color: "blue" }} to="/signUp">
            SignUp new account..?
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default LogIn;
