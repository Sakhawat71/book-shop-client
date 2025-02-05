import { Outlet } from "react-router";
import Navbar from "./Navbar";

const MainLayout = () => {


    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;