import { Link, NavLink, useNavigate } from "react-router";
import logo from '../../assets/books.png';
import { logOut, useCurrentToken} from "../../redux/features/auth/authSlice";
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
                    isPending ? "pending" : isActive ? "text-[red] font-semibold" : "text-black"
                }
            >Home</NavLink>
        </li>

        <li >
            <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
                }
            >Products</NavLink>
        </li>

        <li >
            <NavLink
                {...user?.role === "admin" ?{ to: "/admin/dashboard" } : { to: "/user/dashboard" }}
                // to="/dashboard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
                }
            >Dashboard</NavLink>
        </li>

        <li >
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
                }
            >About Us</NavLink>
        </li>

    </>

    return (
        <div className="navbar bg-[#52a2eb] shadow-sm mx-auto px-5 md:px-10 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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
                    <span>BookNest</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
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


// import { useSelector, useDispatch } from "react-redux";
// import { Link, NavLink } from "react-router";
// import { logoutUser } from "../redux/authSlice";
// import { FaRegUser } from "react-icons/fa";
// import { MdDashboard, MdLogout } from "react-icons/md";
// import { ImSpinner6 } from "react-icons/im";
// import AwesomeButton from "react-awesome-button";


// const Navbar = () => {
//   const dispatch = useDispatch();
//   const { user, isAuthenticated } = useSelector((state) => state.auth); // Get user from Redux

//   const handleLogout = () => {
//     dispatch(logoutUser()); // Clear user data
//   };

//   return (
//     <div className="navbar bg-[#52a2eb] shadow-sm mx-auto px-5 md:px-10 lg:px-20">
//       <div className="navbar-start">
//         <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
//           <img className="w-6" src="/logo.png" alt="BookNest logo" />
//           <span>BookNest</span>
//         </Link>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li><NavLink to="/">Home</NavLink></li>
//           <li><NavLink to="/products">Products</NavLink></li>
//           <li><NavLink to="/about">About Us</NavLink></li>
//           {isAuthenticated && user?.role === "admin" && (
//             <li><NavLink to="/dashboard">Dashboard</NavLink></li>
//           )}
//         </ul>
//       </div>

//       <div className="navbar-end">
//         {isAuthenticated ? (
//           <div className="dropdown dropdown-end flex items-center">
//             <div className="mr-3">
//               <img className="w-8" src={user?.badge === "gold" ? "/goldBadge.png" : "/bronzeBadge.png"} alt="User Badge" />
//             </div>

//             <button tabIndex={0} className="btn btn-ghost btn-circle avatar border border-black">
//               <div className="w-10 rounded-full">
//                 <img alt="User Profile" src={user?.photoURL || "/defaultUser.png"} />
//               </div>
//             </button>

//             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 text-lg space-y-2">
//               <li className="flex pl-3 items-center">
//                 <FaRegUser className="mr-2" /> {user?.displayName}
//               </li>
//               <li>
//                 <Link to="/dashboard/my-profile" className="hover:font-bold">
//                   <MdDashboard className="mr-2" />
//                   Dashboard
//                 </Link>
//               </li>
//               <li>
//                 <button onClick={handleLogout} className="hover:font-bold">
//                   <MdLogout className="mr-2" />
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         ) : (
//           <Link to="/login">
//             <AwesomeButton type="secondary" className="aws-btn">
//               Login
//             </AwesomeButton>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
