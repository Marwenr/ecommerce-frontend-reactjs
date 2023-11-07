import { Navigate, Outlet } from "react-router-dom";

function Protect({ isLoggedIn }) {
  return isLoggedIn ? <Navigate to="/" replace={true} /> : <Outlet />;
}

export default Protect;
