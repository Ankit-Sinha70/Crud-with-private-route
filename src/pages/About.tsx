import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Box>
        <Heading as="h2" size="lg">
          {" "}
          About page...
        </Heading>
        <Box sx={{ margin: "50px" }}>
          <p style={{ fontWeight: "700" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            ipsum ad deserunt repellat corrupti soluta repudiandae assumenda
            reiciendis quasi magni quae, quam excepturi. Cupiditate dolor earum
            debitis nisi qui doloremque sequi dicta quaerat magnam, nam laborum
            rerum doloribus ratione incidunt iste provident facere modi odit.
            Fugit nostrum magnam eligendi et!
          </p>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Card
            sx={{ backgroundColor: "#b6e6c6", width: "50%", margin: "50px", borderRadius:"30px" }}
          >
            <CardHeader>
              <Heading size="md">Client Report</Heading>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Summary
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    View a summary of all your clients over the last month.
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Overview
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Check out the overview of your clients.
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Analysis
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    See a detailed analysis of all your business clients.
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
          <Box sx={{ width: "50%", margin: "50px" }}>
            <p >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
              placeat, dicta perspiciatis dignissimos nisi beatae repellendus
              obcaecati enim in officia quam tempore unde iusto saepe
              exercitationem tenetur voluptatem alias velit fugiat doloremque
              corrupti praesentium, pariatur quis? Minus assumenda, nobis
              cupiditate provident doloremque unde magni hic! Nisi explicabo quo
              doloremque tempore rem modi porro sint qui. Saepe, voluptates
              alias. Tempora corrupti aliquid voluptate delectus illum a dicta
              quibusdam impedit velit, aliquam repellendus consectetur provident
              cumque nulla dolorum unde veniam neque enim esse nemo tenetur
              blanditiis! Cupiditate eveniet ex debitis quisquam, facere optio
              necessitatibus? Molestiae, esse. Dolor minima tempore sunt? Ab,
              ducimus?
            </p>
          </Box>
        </Box>
        <footer
          style={{
            backgroundColor: "green",
            borderTop: "2px",
            position: "fixed",
            width: "100%",
            bottom: "0",
            color: "white",
            textAlign: "center",
          }}
        >
          <ul style={{ listStyleType: "none" }}>
            <li
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-evenly",
                fontSize: "20px"
              }}
            >
              <Link to="/about">About</Link>
              <Link to="/privacy">PrivacyPolicy</Link>
              <Link to="/disclaimer">Disclaimer</Link>
            </li>
            <p>
              <span>Created by Career Karma. © 2023 </span>
            </p>
          </ul>
          <p style={{fontSize:"15px"}}>This is a footer container example that shows bla bla bla ... &reg; all rights reserved</p>
          <p style={{fontSize:"12px"}}>
            Lorem ipsum,  &#9728; dolor sit amet consectetur adipisicing elit &reg;. Placeat
            animi id ullam quod laborum ea velit , distinctio laudantium
            ratione. Qui maxime quasi iusto impedit. &reg;Accusamus, animi!
          </p>
        </footer>
      </Box>
    </>
  );
};

export default About;
