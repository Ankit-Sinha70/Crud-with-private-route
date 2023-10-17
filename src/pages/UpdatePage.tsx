import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUserList } from "../features/UserService";
import { Box, Button, FormLabel, Heading, Input } from "@chakra-ui/react";

const UpdatePage = () => {
  const { users } = useSelector((state: any) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateValue, setUpdateValue] = useState({
    name: "",
    dob: "",
    address: "",
    phoneNumber: "",
    createdAt: "",
  });
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const updatedList = users.filter((elem: any) => elem.id === id);
      setUpdateValue(updatedList[0]);
    }
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(value);
    setUpdateValue({
      ...updateValue,
      [name]: value,
    });
  };

  const handleUpdateUser = (e: any) => {
    e.preventDefault();
    dispatch(updateUserList(updateValue));
    // dispatch(createUserList(updatevalue))
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
          Edit Page
        </Heading>

        <Box sx={{ padding: "20px" }}>
          <form onSubmit={handleUpdateUser}>
            <FormLabel>Name</FormLabel>
            <Input
              variant="flushed"
              type="text"
              name="name"
              placeholder="Enter name"
              value={updateValue.name ?? ""}
              onChange={handleChange}
            />
            <br />
            <br />
            <FormLabel>DOB</FormLabel>
            <Input
              variant="flushed"
              type="text"
              name="dob"
              placeholder="Date of birth"
              value={updateValue.dob ?? ""}
              onChange={handleChange}
            />
            <br />
            <br />
            <FormLabel>Address</FormLabel>
            <br />
            <Input
              variant="flushed"
              type="text"
              name="address"
              placeholder="Enter address"
              value={updateValue.address ?? ""}
              onChange={handleChange}
            />
            <br />
            <br />
            <FormLabel>Phone no.</FormLabel>
            <Input
              variant="flushed"
              type="number"
              name="phoneNumber"
              placeholder="Enter Phone No."
              value={updateValue.phoneNumber ?? ""}
              onChange={handleChange}
            />
            <br />
            <br />
            <FormLabel>Created At</FormLabel>
            <br />
            <Input
              variant="flushed"
              type="text"
              name="createdAt"
              placeholder="Created At"
              value={updateValue.createdAt ?? ""}
              onChange={handleChange}
            />
            <br />
            <br />
            <Button type="submit">Update User</Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default UpdatePage;
