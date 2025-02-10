import { useParams } from "react-router";
import LoadingSpinner from "../../components/layout/LoadingSpinner.tsx";
import { useGetProductByIdQuery } from "../../redux/features/products/productsManagement.api";

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data: product, isLoading, isError } = useGetProductByIdQuery(id as string);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (isError || !product) {
        return <div className="text-center text-red-500">Failed to load product details.</div>;
    }

    const {
        title,
        author,
        price,
        category,
        description,
        quantity,
        inStock,
        createdAt,
    } = product;

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Product Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image (Placeholder or Actual Image) */}
                <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                    <img
                        src="https://via.placeholder.com/400x500"
                        alt={title}
                        className="rounded-lg shadow-lg w-full max-w-md"
                    />
                </div>

                {/* Product Information */}
                <div className="space-y-6">
                    {/* Title and Author */}
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p className="text-lg text-gray-600 italic">by {author}</p>

                    {/* Category and Price */}
                    <div className="flex items-center gap-4">
                        <span className="badge badge-primary badge-lg">{category}</span>
                        <p className="text-2xl font-bold text-primary">${price.toFixed(2)}</p>
                    </div>

                    {/* Stock Status and Quantity */}
                    <div className="flex items-center gap-4">
                        <span
                            className={`badge ${inStock ? "badge-success" : "badge-error"}`}
                        >
                            {inStock ? "In Stock" : "Out of Stock"}
                        </span>
                        <p className="text-sm text-gray-600">{quantity} units available</p>
                    </div>

                    {/* Description */}
                    <div className="prose max-w-none">
                        <h3 className="text-xl font-semibold mb-2">Description</h3>
                        <p className="text-gray-700">{description}</p>
                    </div>

                    {/* Additional Details */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Additional Details</h3>
                        <p className="text-sm text-gray-600">
                            <strong>Added on:</strong> {new Date(createdAt).toLocaleDateString()}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button className="btn btn-primary">Add to Cart</button>
                        <button className="btn btn-outline">Buy Now</button>
                    </div>
                </div>
            </div>

            {/* Related Products Section (Optional) */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Map through related products here */}
                    {/* Example: <ProductCard product={relatedProduct} /> */}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;