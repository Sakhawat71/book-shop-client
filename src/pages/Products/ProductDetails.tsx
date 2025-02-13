import { Link, useParams } from "react-router";
import LoadingSpinner from "../../components/layout/LoadingSpinner.tsx";
import { useGetProductByIdQuery, useGetProductsQuery } from "../../redux/features/products/productsManagement.api";
import ProductCard from "./ProductCard.tsx";
import { IProduct } from "../../types/productes.type.ts";

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data: product, isLoading, isError } = useGetProductByIdQuery(id as string);
    const { data: relatedProducts } = useGetProductsQuery(product?.data?.category);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (isError || !product) {
        return <div className="text-center text-red-500">Failed to load product details.</div>;
    }

    const {
        _id,
        title,
        author,
        price,
        category,
        description,
        quantity,
        inStock,
        createdAt,
    } = product?.data;

    const imageUrl = product?.data?.image || "https://i.ibb.co.com/3m19PvWc/pexels-pixabay-159866.jpg";


    return (
        <div className="container mx-auto px-4 py-8 bg-gray-100">
            {/* Product Details Section */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-lg shadow-lg">
                {/* Product Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>

                {/* Product Information */}
                <div className="w-full md:w-1/2 space-y-4">
                    <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
                    <p className="text-lg text-gray-600 italic">by {author}</p>
                    <span className="badge badge-primary badge-lg">{category}</span>
                    <p className="text-2xl font-bold text-primary">${price?.toFixed(2)}</p>
                    <span className={`badge ${inStock ? "badge-success" : "badge-error"}`}>
                        {inStock ? "In Stock" : "Out of Stock"}
                    </span>
                    <p className="text-sm text-gray-600">{quantity} units available</p>
                    <p className="text-gray-700 leading-relaxed">{description}</p>
                    <p className="text-sm text-gray-600">
                        <strong>Added on:</strong> {new Date(createdAt).toLocaleDateString()}
                    </p>
                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-4">
                        {inStock ? (
                            <Link to={`/checkout/${_id}`} className="btn btn-outline btn-lg">
                                Buy Now
                            </Link>
                        ) : (
                            <button disabled className="btn btn-outline btn-lg">
                                Out of Stock
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Related Products Section (Optional) */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {relatedProducts?.data?.map((product: IProduct) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
