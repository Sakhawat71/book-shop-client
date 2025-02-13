import { Link, NavLink, Outlet } from "react-router";
import logo from '../../assets/books.png'


const UserDashboard = () => {


    const userLink = <>

        <li>
            <NavLink to={'my-profile'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
            }>

                <span className="flex items-center gap-2">
                    My Profile
                </span>
            </NavLink>
        </li>

        <li>
            <NavLink to={'my-orders'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
            }>
                <span className="flex items-center gap-2">
                    My orders
                </span>
            </NavLink>
        </li>

    </>


    return (
        <div className="flex gap-10 container mx-auto min-h-screen">

            <div className="w-3/12 pt-10 bg-slate-50 shadow-2xl rounded-2xl font-roboto ">
                <Link to="/">
                    <figure className=" mx-auto text-center">
                        <img
                            src={logo}
                            alt="logo" className="w-10 mx-auto" />
                        <p className="font-bold pt-1">BookNest</p>
                    </figure>
                </Link>

                <ul className="space-y-3 py-10 mx-5 font-semibold text-xl ">


                    {userLink}

                    <hr className=" py-2" />
                    <hr />

                </ul>
            </div>

            <main className="w-9/12 bg-slate-50 shadow-2xl rounded-2xl">
                <Outlet />
            </main>
        </div>
    );
};

export default UserDashboard;