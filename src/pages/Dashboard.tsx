import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUserList, displayUserList } from "../features/UserService";
import { Box, Button, ButtonGroup, Heading, Stack } from "@chakra-ui/react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: any) => state?.app);

  useEffect(() => {
    dispatch(displayUserList() as any);
  }, []);

  return (
    <>
      <Box sx={{}}>
        <Heading as={"h2"} size={"md"} textAlign={"center"}>
          UserLists...
        </Heading>

        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
            padding: "20px",
          }}
        >
          {users?.map((item: any) => {
            return (
              <>
                <Box
                  style={{
                    backgroundColor: "#d7dad8",
                    padding: "5px",
                    borderRadius: "20px",
                    boxShadow:
                      " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  }}
                  key={item.id}
                >
                  <Stack spacing={6}>
                    <Heading as={"h5"} size={"md"}>
                      Name:- {item.name}
                    </Heading>
                    <Heading as={"h5"} size={"md"}>
                      DOB:- {item.dob}
                    </Heading>
                    <Heading as={"h5"} size={"md"}>
                      Address:- {item.address}
                    </Heading>
                    <Heading as={"h5"} size={"md"}>
                      PhoneNumber:- {item.phoneNumber}
                    </Heading>
                    <Heading as={"h5"} size={"md"}>
                      Created:- {item.createdAt}
                    </Heading>
                    <ButtonGroup spacing={1}>
                      <Button
                        colorScheme="teal"
                        onClick={() => dispatch(deleteUserList(item.id) as any)}
                        padding="10px"
                        margin="20px"
                      >
                        Delete
                      </Button>
                      <Link to={`/edit/${item.id}`}>
                        <Button colorScheme="red">Edit</Button>
                      </Link>
                    </ButtonGroup>
                  </Stack>
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
