import { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "./pages/signin";
import LoginPage from "./pages/login";
import NotFoundPage from "./pages/notfound";
import { Refreshhandle } from "./pages/Refreshhandle";
import HomepageUi from "./pages/Homeuie";

function App() {
  const [isauthed, setisauthed] = useState(false);

  const Privateroute = ({ element }) => {
    return isauthed ? element : <Navigate to="/login" />;
  };
  return (
    <>
      <Refreshhandle setauthed={setisauthed} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/home"
          element={<Privateroute element={<HomepageUi />} />}
        />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
