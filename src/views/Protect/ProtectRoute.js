import { Navigate, Outlet } from "react-router-dom";

function ProtectRoute({ isLoggedIn }) {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace={true} />;
}

export default ProtectRoute;
