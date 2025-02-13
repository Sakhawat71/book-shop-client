import { useForm } from "react-hook-form";
import CForm from "../../../components/customForm/CForm";
import CInput from "../../../components/customForm/CInput";
import { useAddProductMutation } from "../../../redux/features/admin/adminManagementApi";
import { IProduct } from "../../../types/productes.type";
import CTextarea from "../../../components/customForm/CTextarea";
import CSelect from "../../../components/customForm/CSelect";
import { toast } from "sonner";


const AddProducts = () => {
    const [addProduct] = useAddProductMutation();

    const methods = useForm({
        defaultValues: {
            title: "",
            author: "",
            price: 0,
            category: "",
            image: "",
            description: "",
            quantity: 0,
            inStock: "true",
        },
    });

    const onSubmit = async (data: IProduct) => {
        const productData = {
            ...data,
            price: Number(data.price),
            quantity: Number(data.quantity),
            inStock: data.inStock === "true",
        };


        const toastId = toast.loading('Creating product...', { duration: 200 });

        const res = await addProduct(productData);

        if (res.data) {
            toast.success(res.data.message, {
                id: toastId,
                duration: 2000
            });
            methods.reset();
        } else if (res.error) {
            const errorMessage = (res.error as any).data?.message || 'Failed to create product';
            toast.error(errorMessage, {
                id: toastId,
                duration: 3000
            });
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Add New Product</h1>

            <CForm onSubmit={onSubmit} {...methods}>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Product Title */}
                    <CInput
                        type="text"
                        name="title"
                        label="Product Title"
                        placeholder="Enter product title"
                        required
                    />

                    {/* Author */}
                    <CInput
                        type="text"
                        name="author"
                        label="Author"
                        placeholder="Enter author name"
                        required
                    />

                    {/* image */}
                    <CInput
                        type="text"
                        name="image"
                        label="Image Url"
                        placeholder="Enter image url"
                        required
                    />

                    {/* Price */}
                    <CInput
                        type="number"
                        name="price"
                        label="Price"
                        placeholder="Enter product price"
                        required
                    />

                    {/* Category */}
                    <CSelect
                        name="category"
                        label="Category"
                        required
                        placeholder="Select an option"
                        options={
                            [
                                { value: "Fiction", label: "Fiction" },
                                { value: "Science", label: "Science" },
                                { value: "SelfDevelopment", label: "SelfDevelopment" },
                                { value: "Poetry", label: "Poetry" },
                                { value: "Religious", label: "Religious" },
                            ]
                        }
                    />

                    {/* Quantity */}
                    <CInput
                        type="number"
                        name="quantity"
                        label="Quantity"
                        placeholder="Enter product quantity"
                        required
                    />

                    {/* Description */}
                    <CTextarea
                        name="description"
                        label="Description"
                        placeholder="Enter product description"
                        required
                    />

                    {/* In Stock */}
                    <CSelect
                        name="inStock"
                        label="In Stock"
                        required
                        placeholder="Select an option"
                        options={[
                            { value: "true", label: "Yes" },
                            { value: "false", label: "No" },
                        ]}
                    />

                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '12px',
                        fontSize: '16px',
                        fontWeight: '600',
                        backgroundColor: '#5D62FF',
                        border: 'none',
                        borderRadius: '6px',
                        color: 'white',
                        cursor: 'pointer',
                    }}
                >
                    Add Product
                </button>
            </CForm>

        </div>
    );
};

export default AddProducts;
