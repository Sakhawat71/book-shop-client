import { useParams } from "react-router";
import LoadingSpinner from "../../components/layout/LoadingSpinner.tsx";
import { useGetProductByIdQuery, useGetProductsQuery } from "../../redux/features/products/productsManagement.api";
import ProductCard from "./ProductCard.tsx";
import { IProduct } from "../../types/productes.type.ts";

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data: product, isLoading, isError } = useGetProductByIdQuery(id as string);
    const { data: relatedProducts } = useGetProductsQuery(product?.data.category);

    // console.log(relatedProducts);
    // console.log(product?.data.category);

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
    } = product?.data;

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Product Details Section */}
            <div className="max-w-4xl mx-auto">
                {/* Title and Author */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
                    <p className="text-lg text-gray-600 italic mt-2">by {author}</p>
                </div>

                {/* Category and Price */}
                <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="badge badge-primary badge-lg">{category}</span>
                    <p className="text-2xl font-bold text-primary">${price?.toFixed(2)}</p>
                </div>

                {/* Stock Status and Quantity */}
                <div className="flex items-center justify-center gap-4 mb-6">
                    <span
                        className={`badge ${inStock ? "badge-success" : "badge-error"}`}
                    >
                        {inStock ? "In Stock" : "Out of Stock"}
                    </span>
                    <p className="text-sm text-gray-600">{quantity} units available</p>
                </div>

                {/* Description */}
                <div className="bg-base-100 p-6 rounded-lg shadow-sm mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Description</h3>
                    <p className="text-gray-700 leading-relaxed">{description}</p>
                </div>

                {/* Additional Details */}
                <div className="bg-base-100 p-6 rounded-lg shadow-sm mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Details</h3>
                    <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                            <strong>Added on:</strong> {new Date(createdAt).toLocaleDateString()}
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                    <button className="btn btn-outline btn-lg">Buy Now</button>
                </div>
            </div>

            {/* Related Products Section (Optional) */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        relatedProducts?.data?.map((product: IProduct) =>
                            <ProductCard key={product._id} product={product} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;