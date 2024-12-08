import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { POSContext } from "../AppContext";

const Protected = (props) => {
  const { appData } = useContext(POSContext)

  if (!appData.macno) {
    alert('ไม่พบข้อมูลหมายเลขเครื่อง !!!')
    return <Navigate to="/" />
  } else {
    return appData.userLogin ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default Protected;
