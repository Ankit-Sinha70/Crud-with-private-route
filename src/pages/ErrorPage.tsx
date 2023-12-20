import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <body>
        <div className="error-container">
          <h4>404 Error - Page Not Found</h4>
          <p>Sorry, the page you are looking for could not be found.</p>
          <Link to="/home">Go to Home</Link>
        </div>
      </body>
    </>
  );
};

export default ErrorPage;
