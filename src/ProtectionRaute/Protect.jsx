import { Navigate } from "react-router-dom";

const Protect = ({ children }) => {
  const user = localStorage.getItem("userId");

  return user ? children : <Navigate to="/login" />;
};

export default Protect;
