import { Link } from "react-router";
import { IProduct } from "../../types/productes.type";

const ProductCard = ({ product }: { product: IProduct }) => {

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
    } = product;

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-200">
            {/* Card Body */}
            <div className="card-body p-6">
                {/* Stock Status and Quantity */}
                <div className="flex justify-between items-start">
                    <span
                        className={`badge ${inStock ? "badge-success" : "badge-error"}`}
                    >
                        {inStock ? "In Stock" : "Out of Stock"}
                    </span>
                    <span className="text-sm text-gray-500">
                        {quantity} units available
                    </span>
                </div>

                {/* Title and Author */}
                <h2 className="card-title text-2xl font-bold mt-2">{title}</h2>
                <p className="text-sm text-gray-600 italic">by {author}</p>

                {/* Category and Price */}
                <div className="flex items-center justify-between mt-4">
                    <span className="badge badge-outline badge-primary">
                        {category}
                    </span>
                    <span className="text-xl font-bold text-primary">
                        ${price.toFixed(2)}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 mt-4 line-clamp-3">{description}</p>

                {/* Added Date */}
                <p className="text-xs text-gray-500 mt-2">
                    Added on: {new Date(createdAt).toLocaleDateString()}
                </p>

                {/* Action Button */}
                <div className="card-actions justify-end mt-6">
                    <Link
                        to={`/products/${_id}`}
                        className="btn btn-primary btn-sm"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
