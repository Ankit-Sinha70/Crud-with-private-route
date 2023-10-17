import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserList } from "../features/UserService";
import { useNavigate } from "react-router-dom";
import { Box, Button, FormLabel, Heading, Input } from "@chakra-ui/react";

const Home = () => {
  const { users } = useSelector((state: any) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    dob: "",
    address: "",
    phoneNumber: "",
    createdAt: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(value);
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleAddUser = (e: any) => {
    e.preventDefault();
    dispatch(createUserList(input) as any);
    localStorage.setItem("userdata", JSON.stringify(users));
    navigate("/dashboard");
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
        <Heading as={"h3"} size={"md"} textAlign={"center"}>
          Home Page
        </Heading>

        <Box sx={{ margin: "20px", padding: "10px" }}>
          <form onSubmit={handleAddUser}>
            <FormLabel>Name</FormLabel>
            <Input
              required
              variant="flushed"
              type="text"
              name="name"
              placeholder="Enter name"
              value={input.name}
              onChange={handleChange}
            />
            <br />
            <br />
            <FormLabel>Date Of Birth</FormLabel>
            <Input
             required
              variant="flushed"
              type="date"
              name="dob"
              placeholder="dd-mm-yyyy"
              value={input.dob}
              onChange={handleChange}
            />
            <br />
            <br />
            <FormLabel>Address</FormLabel>
            <Input
             required
              variant="flushed"
              type="text"
              name="address"
              placeholder="Enter address"
              value={input.address}
              onChange={handleChange}
            />
            <br />
            <br />
            <FormLabel>Phone no.</FormLabel>
            <Input
             required
              variant="flushed"
              type="number"
              name="phoneNumber"
              placeholder="Enter Phone No."
              value={input.phoneNumber}
              onChange={handleChange}
            />
            <br />
            <br />
            <FormLabel>Created At</FormLabel>
            <Input
             required
              variant="flushed"
              type="date"
              name="createdAt"
              placeholder="Created At"
              value={input.createdAt}
              onChange={handleChange}
            />
            <br />
            <br />
            <Button colorScheme="teal" type="submit">
              Add User
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Home;
