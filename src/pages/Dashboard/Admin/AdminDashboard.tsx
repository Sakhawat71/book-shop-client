import { Link, NavLink, Outlet } from "react-router";
import logo from '../../../assets/books.png';
import { useState } from "react";
import { FaBars, FaTimes, FaUsers, FaBox, FaShoppingCart, FaChartLine } from "react-icons/fa";

const AdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const adminLinks = (
        <>
            <li>
                <NavLink
                    to={''}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
                    }
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <span className="flex items-center gap-2">
                        <FaChartLine className="text-lg" />
                        Dashboard
                    </span>
                </NavLink>
            </li>

            <li>
                <NavLink
                    to={'manage-users'}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
                    }
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <span className="flex items-center gap-2">
                        <FaUsers className="text-lg" />
                        Manage Users
                    </span>
                </NavLink>
            </li>

            <li>
                <NavLink
                    to={'manage-products'}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
                    }
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <span className="flex items-center gap-2">
                        <FaBox className="text-lg" />
                        Manage Products
                    </span>
                </NavLink>
            </li>

            <li>
                <NavLink
                    to={'manage-orders'}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
                    }
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <span className="flex items-center gap-2">
                        <FaShoppingCart className="text-lg" />
                        Manage Orders
                    </span>
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="flex flex-col md:flex-row gap-6 container mx-auto min-h-screen p-4">
            {/* Mobile Sidebar Toggle Button */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#44b584] text-white rounded-lg shadow-lg"
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed md:static inset-y-0 left-0 w-64 bg-slate-50 shadow-2xl rounded-2xl font-roboto transform transition-transform duration-300 ease-in-out z-40
                            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
            >
                <div className="pt-6">
                    <Link to="/" onClick={() => setIsSidebarOpen(false)}>
                        <figure className="mx-auto text-center">
                            <img
                                src={logo}
                                alt="logo"
                                className="w-10 mx-auto"
                            />
                            <p className="font-bold pt-1">BookNest Admin</p>
                        </figure>
                    </Link>

                    <ul className="space-y-3 py-10 mx-5 font-semibold text-lg">
                        {adminLinks}
                        <hr className="py-2" />
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 bg-slate-50 shadow-2xl rounded-2xl p-6">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminDashboard;