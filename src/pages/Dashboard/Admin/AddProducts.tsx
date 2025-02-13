import { useForm } from "react-hook-form";
import CForm from "../../../components/customForm/CForm";
import CInput from "../../../components/customForm/CInput";

const AddProducts = () => {

    const methods = useForm({
        // resolver: zodResolver(productSchema),
        defaultValues: {
            title: "",
            author: "",
            price: 0,
            category: "",
            description: "",
            quantity: 0,
            inStock: true,
        },
    });

    const onSubmit = (data: any) => {
        console.log("Product Data:", data);
        // Handle form submission (e.g., send data to API)
    };


    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Add New Product</h1>
            <CForm onSubmit={onSubmit}>
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

                {/* Price */}
                <CInput
                    type="number"
                    name="price"
                    label="Price"
                    placeholder="Enter product price"
                    required
                />

                {/* Category */}
                <CInput
                    type="text"
                    name="category"
                    label="Category"
                    placeholder="Enter product category"
                    required
                />

                {/* Description */}
                <div style={{ marginBottom: '16px' }}>
                    <label
                        htmlFor="description"
                        style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: '600',
                            fontSize: '14px',
                            color: '#333',
                        }}
                    >
                        Description
                    </label>
                    <textarea
                        {...methods.register("description")}
                        id="description"
                        placeholder="Enter product description"
                        style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #d9d9d9',
                            borderRadius: '6px',
                            fontSize: '14px',
                            outline: 'none',
                            transition: 'border-color 0.3s ease',
                            minHeight: '120px',
                        }}
                        onFocus={(e) =>
                            (e.target.style.borderColor = '#1890ff')
                        }
                        onBlur={(e) =>
                            (e.target.style.borderColor = '#d9d9d9')
                        }
                    />
                    {methods.formState.errors.description && (
                        <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
                            {(methods.formState.errors.description as any).message}
                        </p>
                    )}
                </div>

                {/* Quantity */}
                <CInput
                    type="number"
                    name="quantity"
                    label="Quantity"
                    placeholder="Enter product quantity"
                    required
                />

                {/* In Stock */}
                <div style={{ marginBottom: '16px' }}>
                    <label
                        style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: '600',
                            fontSize: '14px',
                            color: '#333',
                        }}
                    >
                        In Stock
                    </label>
                    <select
                        {...methods.register("inStock")}
                        style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #d9d9d9',
                            borderRadius: '6px',
                            fontSize: '14px',
                            outline: 'none',
                            transition: 'border-color 0.3s ease',
                        }}
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    // type="primary"
                    // htmlType="submit"
                    style={{
                        width: '100%',
                        padding: '12px',
                        fontSize: '16px',
                        fontWeight: '600',
                        backgroundColor: '#44b584',
                        border: 'none',
                        borderRadius: '6px',
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