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
        <Heading as="h2" size="lg" margin={"25px"}>
          About page...
        </Heading>
        <Box sx={{ margin: "30px" }}>
          <p style={{ fontWeight: "600", fontSize:"15px" }}>
          The company itself is a very successful company. Something drives the corrupt to desert, to assume the loose rejection of rejection as if it were something great that they would accept. The pain of these debts is due to desire, unless he who follows the sayings seeks a great deal, for he hates to do the things they provide for the pains of the things that fall on the basis of pains. Escapes our great choice and!
          </p>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Card
            sx={{ backgroundColor: "#b6e6c6", width: "50%", margin: "30px", borderRadius:"30px" }}
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
            <p style={{fontSize:"15px"}}>
            Thank you very much. Most of all, it pleases you to see what has been said, the most deserving, except the blessed, are repulsed, for they are blinded to the duties of what time, whence the regular exercise is often held; the pleasure, otherwise, he wants to flee, and the pain of the corrupt present, who is spared? To assume less, they provide us with desire and pain from which the great here! But I will explain at what pain and time the matter will be resolved further on. Often, other pleasures. Corrupted times, when something has been chosen for pleasure, it is hindered by what some have said, they provide for some repulsion, and there are no pains from which to come, and no one is bound by flattery! Will anyone come out of debt with desire, to make a choice of needs? Trouble, to be. Are they the least painful at the time? From, we lead?
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
