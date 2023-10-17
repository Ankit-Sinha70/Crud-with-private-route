import { Link } from "react-router-dom";

// import { Box, Heading } from "@chakra-ui/react";
const ErrorPage = () => {
  return (
    <>
      <head>
      <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>404 Error - Page Not Found</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <div className="error-container">
          <h1>404</h1>
          <p>Sorry, the page you are looking for could not be found.</p>
          <Link to="/home">Go to Home</Link>
        </div>
      </body>
    </>
  );
};

export default ErrorPage;
