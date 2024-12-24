import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Refreshhandle = ({ setauthed }) => {
  const location = useLocation();
  const navigator = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setauthed(true);
      if (
        location.pathname === "/" ||
        location.pathname === "/login" ||
        location.pathname === "/signin"
      ) {
        navigator("/home", { replace: false });
      }
    }
  }, [location, navigator, setauthed]);
  return null;
};
