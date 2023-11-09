import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../store/authSlice";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.clear();
    dispatch(logout());
    navigate("/login");
  }, [navigate, dispatch]);
  return;
}

export default Logout;
