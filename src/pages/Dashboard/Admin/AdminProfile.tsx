import { Avatar, Badge, Button, Card } from "antd";
import { FaUser } from "react-icons/fa";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentToken } from "../../../redux/features/auth/authSlice";
import { verifytoken } from "../../../utils/verifyToken";
import { useGetUserByEmailQuery } from "../../../redux/features/admin/adminManagementApi";

const AdminProfile = () => {

    const token = useAppSelector(useCurrentToken);
    const user = verifytoken(token!);

    const { data: userData, isLoading } = useGetUserByEmailQuery(user?.userEmail)

    const userDetails = userData?.data;

    if (isLoading) {
        return (
            <div className="text-center mt-12">
                <div className="loading loading-lg loading-spinner text-primary"></div>
                <p className="mt-4 text-gray-500">Searching Admin...</p>
            </div>
        )
    }

    return (
        <div className="max-w-2xl mx-auto py-10">
            <Card
                className="shadow-lg"
                title={
                    <div className="flex items-center gap-4">
                        <Avatar size={64} icon={<FaUser />} />
                        <div>
                            <h2 className="text-xl font-semibold">{userDetails?.name}</h2>
                            <p className="text-gray-600">{userDetails?.email}</p>
                        </div>
                    </div>
                }
                actions={[
                    <Button type="primary">Edit Profile</Button>,
                    userDetails?.role === "admin" && <Button danger>Admin Settings</Button>,
                ]}
            >
                <p>
                    <strong>Role:</strong>{" "}
                    <Badge color={userDetails?.role === "admin" ? "red" : "blue"} text={userDetails?.role.toUpperCase()} />
                </p>
                <p>
                    <strong>Account Status:</strong>{" "}
                    <Badge
                        color={userDetails?.isBlocked ? "red" : "green"}
                        text={userDetails?.isBlocked ? "Blocked" : "Active"}
                    />
                </p>
                <p>
                    <strong>Joined:</strong> {new Date(userDetails?.createdAt).toLocaleDateString()}
                </p>
            </Card>
        </div>
    );
};

export default AdminProfile;