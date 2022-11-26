import { Outlet } from "react-router";
import Menu from "../components/navigate/Menu;";

const MainLayouts = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default MainLayouts;
