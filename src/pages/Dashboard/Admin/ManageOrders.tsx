import {Button, Spin, Table } from "antd";
import { useGetAllOrdersQuery } from "../../../redux/features/order/orderManagement.api";
import { toast } from "sonner";

const ManageOrders = () => {
    const { data, isLoading, error } = useGetAllOrdersQuery(undefined);

    // Order data transformation (if needed)
    const orders = data?.data || [];

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <Spin size="large" />
            </div>
        );
    }

    if (error) {
        return <p className="text-red-500 text-center text-lg">Failed to load orders.</p>;
    }

    // Define table columns
    const columns = [
        {
            title: "Order ID",
            dataIndex: "_id",
            key: "_id",
            render: (id: string) => <span className="font-medium">{id.slice(-6)}</span>,
        },
        {
            title: "Customer Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Product ID",
            dataIndex: "product",
            key: "product",
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "Total Price ($)",
            dataIndex: "totalPrice",
            key: "totalPrice",
            render: (price: number) => `$${price.toFixed(2)}`,
        },
        {
            title: "Order Date",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (date: string) => new Date(date).toLocaleDateString(),
        },
        // {
        //     title: "Actions",
        //     key: "actions",
        //     render: (_, record) => (
        //         <div className="flex gap-2">
        //             <Button type="primary" onClick={() => toast.success("Viewing Order")}>
        //                 View
        //             </Button>
        //             <Button type="default" danger onClick={() => toast.error("Order Cancelled")}>
        //                 Cancel
        //             </Button>
        //         </div>
        //     ),
        // },
    ];

    return (
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-8 my-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
                Manage Orders
            </h1>

            {/* Ant Design Table */}
            <Table
                columns={columns}
                dataSource={orders}
                rowKey="_id"
                pagination={{ pageSize: 5 }}
                scroll={{ x: true }}
            />
        </div>
    );
};

export default ManageOrders;
