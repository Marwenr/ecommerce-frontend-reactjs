import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectAdmin({ isLoggedIn, role }) {
  const location = useLocation();
  return isLoggedIn && (role === "admin" || role === "manager") ? (
    <Outlet />
  ) : isLoggedIn ? (
    <Navigate to="/" replace={true} />
  ) : (
    <Navigate
      to="/login"
      state={{ prevUrl: location.pathname }}
      replace={true}
    />
  );
}

export default ProtectAdmin;
