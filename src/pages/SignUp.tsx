import { Box, Button, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      inputValue.username !== "" &&
      inputValue.password !== "" &&
      inputValue.confirmPassword !== "" &&
      inputValue.password === inputValue.confirmPassword
    ) {
      localStorage.setItem("token", JSON.stringify(inputValue));
      navigate("/");
    } else {
      alert("Password Not match");
    }
  };
  return (
    <>
      <Box
        sx={{
          width: "40%",
          margin: "50px",
          borderRadius: "30px",
          backgroundColor: "#d7dad8",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        <Heading as={"h4"} size={"md"} textAlign={"center"}>
          SignUp new account..?
        </Heading>
        <Box sx={{ margin: "40px" }}>
          <form onSubmit={handleSubmit}>
            <FormLabel>Username</FormLabel>
            <Input
              variant="flushed"
              type="text"
              name="username"
              placeholder="Enter your username"
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
            <FormLabel>Confirm Password</FormLabel>
            <Input
              variant="flushed"
              type="text"
              name="confirmPassword"
              placeholder="confirm password"
              onChange={handleChange}
            />
            <br />
            <br />
            <Button colorScheme="teal" type="submit">Submit</Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
