import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const macno = localStorage.getItem("macno");
  if (!macno) {
    alert('ไม่พบข้อมูลหมายเลขเครื่อง !!!')
    return <Navigate to="/" />
  } else {
    const token = localStorage.getItem("pos_login");
    return token ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default Protected;