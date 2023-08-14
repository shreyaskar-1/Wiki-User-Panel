import { Outlet } from "react-router-dom";

const BlankLayout = () => (
  <>
    <Outlet style={{ backgroundColor: "black" }} />
  </>
);

export default BlankLayout;
