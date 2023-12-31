import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectRoute({ isLoggedIn }) {
  const location = useLocation();
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{ prevUrl: location.pathname }}
      replace={true}
    />
  );
}

export default ProtectRoute;
