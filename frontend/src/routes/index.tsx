import { Route, Routes, Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesMain = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/login" element={<Login navigate={navigate} />} />
      <Route path="/register" element={<Register navigate={navigate} />} />
      <Route path="*" element={<Navigate replace to={"login"} />} />
    </Routes>
  );
};
export default RoutesMain;
