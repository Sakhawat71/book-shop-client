import { Table, Tag, Space, Button, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useGetProductsQuery } from "../../../redux/features/products/productsManagement.api";
import { IProduct } from "../../../types/productes.type";

const ProductManagement = () => {
    const [searchText, setSearchText] = useState("");
    const {data : products} = useGetProductsQuery({});

    const filteredProducts = products?.data?.filter((product : IProduct) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
    );

    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            render: (text: string) => <span className="font-medium">{text}</span>,
        },
        {
            title: "Author",
            dataIndex: "author",
            key: "author",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price: number) => <span>${price}</span>,
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            render: (category: string) => <Tag color="blue">{category}</Tag>,
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
            render: (quantity: number) => (
                <span className={quantity > 0 ? "text-green-600" : "text-red-500"}>
                    {quantity}
                </span>
            ),
        },
        {
            title: "In Stock",
            dataIndex: "inStock",
            key: "inStock",
            render: (inStock: boolean) => (
                <Tag color={inStock ? "green" : "red"}>
                    {inStock ? "Available" : "Out of Stock"}
                </Tag>
            ),
        },
        {
            title: "Actions",
            key: "actions",
            render: (_: any, record: any) => (
                <Space>
                    <Button icon={<EditOutlined />} type="primary" size="small">
                        Edit
                    </Button>
                    <Button icon={<DeleteOutlined />} type="default" danger size="small">
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Product Management</h2>

            {/* Search Bar */}
            <Input
                placeholder="Search products..."
                onChange={(e) => setSearchText(e.target.value)}
                className="mb-4 w-full"
            />

            {/* Table */}
            <Table
                columns={columns}
                dataSource={filteredProducts}
                rowKey="_id"
                pagination={{ pageSize: 5 }}
            />
        </div>
    );
};

export default ProductManagement;
