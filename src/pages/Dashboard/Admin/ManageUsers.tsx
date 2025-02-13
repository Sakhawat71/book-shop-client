import { FaLock, FaTrash, FaUnlock } from "react-icons/fa";
import { useGetUsersQuery } from "../../../redux/features/admin/adminManagementApi";
import { IManageUser } from "../../../types/user.type";

const ManageUsers = () => {

    const { data: users } = useGetUsersQuery(undefined);
    // console.log(users);

    // Handle Block/Unblock User
    const toggleBlockUser = (id : string, isBlocked : boolean) => {
        console.log(isBlocked,id);
    };

    // Handle Delete User
    const deleteUser = (id : string) => {
        console.log('delete for : ',id);
    }


    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">User Management</h2>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-3">Name</th>
                            <th className="border p-3">Email</th>
                            <th className="border p-3">Role</th>
                            <th className="border p-3">Status</th>
                            <th className="border p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.data?.map((user : IManageUser) => (
                            <tr key={user._id} className="text-center">
                                <td className="border p-3">{user.name}</td>
                                <td className="border p-3">{user.email}</td>
                                <td className="border p-3 capitalize">{user.role}</td>
                                <td className={`border p-3 font-semibold ${user.isBlocked ? "text-red-500" : "text-green-500"}`}>
                                    {user.isBlocked ? "Blocked" : "Active"}
                                </td>
                                <td className="border p-3 space-x-3">
                                    <button
                                        onClick={() => toggleBlockUser(user._id, user.isBlocked)}
                                        className={`p-2 rounded-lg text-white ${user.isBlocked ? "bg-green-500" : "bg-red-500"}`}
                                    >
                                        {user.isBlocked ? <FaUnlock /> : <FaLock />}
                                    </button>
                                    <button
                                        onClick={() => deleteUser(user._id)}
                                        className="p-2 rounded-lg bg-gray-500 text-white"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;