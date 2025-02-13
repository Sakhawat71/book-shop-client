import { Link, NavLink, useNavigate } from "react-router";
import logo from '../../assets/books.png';
import { logOut, useCurrentToken } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { verifytoken } from "../../utils/verifyToken";


const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const token = useAppSelector(useCurrentToken);
    let user;

    if (token) {
        const verifiedUser = verifytoken(token as string);
        // console.log('token value'  , verifiedUser);
        user = verifiedUser;
    }


    const handleLogout = () => {
        dispatch(logOut());
        navigate("/login");
    };

    const navLink = <>
        <li >
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-white"
                }
            >Home</NavLink>
        </li>

        <li >
            <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-white"
                }
            >Products</NavLink>
        </li>

        {
            user && <li >
                <NavLink
                    {...user?.role === "admin" ? { to: "/admin/dashboard" } : { to: "/user/dashboard" }}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-white"
                    }
                >Dashboard</NavLink>
            </li>
        }

        <li >
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-white"
                }
            >About Us</NavLink>
        </li>
    </>

    return (
        <div className="navbar bg-[#5D62FF] shadow-sm mx-auto px-5 md:px-10 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-black text-lg">
                        {navLink}
                    </ul>
                </div>
                {/* logo + name */}
                <Link to="/" className="btn btn-ghost text-xl">
                    <img
                        className="w-[24px]"
                        src={logo}
                        alt="BookNest logo"
                    />
                    <span className="text-white">BookNest</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    {navLink}
                </ul>
            </div>


            <div className="navbar-end">
                {
                    user?.userEmail ?
                        <button onClick={handleLogout} className="btn">Logout</button>
                        : <Link to='/login' className="btn">Login</Link>
                }
            </div>

        </div>
    );
};

export default Navbar;
