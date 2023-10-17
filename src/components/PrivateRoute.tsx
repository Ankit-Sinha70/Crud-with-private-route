import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children } : any) => {
  const isSignedIn = JSON.parse(localStorage.getItem("isSignedIn") as any);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/");
    }
  }, []);

  return children;
};

export default PrivateRoute;
