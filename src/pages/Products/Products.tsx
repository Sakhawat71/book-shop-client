import { useGetProductsQuery } from "../../redux/features/products/productsManagement.api";
import { Link, useSearchParams } from "react-router";

const Products = () => {
    // Query parameters for backend
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const author = searchParams.get("author") || "";
    const priceRange = searchParams.get("price") || "";
    const inStock = searchParams.get("inStock") || "";

    // Fetch products based on query params
    const { data: products, isLoading } = useGetProductsQuery({
        search: searchTerm,
        category,
        author,
        price: priceRange,
        inStock,
    });

    // Handle search input
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParams({ search: event.target.value });
    };

    // Handle filter changes
    const handleFilterChange = (key: string, value: string) => {
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
            if (value) params.set(key, value);
            else params.delete(key);
            return params;
        });
    };

    return (
        <div className="container mx-auto px-4 py-6">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row items-center gap-4">
                <input
                    type="text"
                    placeholder="Search by title, author, or category..."
                    className="input input-bordered w-full md:w-1/2"
                    onChange={handleSearch}
                    defaultValue={searchTerm}
                />

                {/* Filters */}
                <select
                    className="select select-bordered"
                    onChange={(e) => handleFilterChange("category", e.target.value)}
                    value={category}
                >
                    <option value="">All Categories</option>
                    <option value="fiction">Fiction</option>
                    <option value="non-fiction">Non-Fiction</option>
                    <option value="fantasy">Fantasy</option>
                </select>

                <select
                    className="select select-bordered"
                    onChange={(e) => handleFilterChange("author", e.target.value)}
                    value={author}
                >
                    <option value="">All Authors</option>
                    <option value="J.K. Rowling">J.K. Rowling</option>
                    <option value="George Orwell">George Orwell</option>
                </select>

                <select
                    className="select select-bordered"
                    onChange={(e) => handleFilterChange("inStock", e.target.value)}
                    value={inStock}
                >
                    <option value="">Availability</option>
                    <option value="true">In Stock</option>
                    <option value="false">Out of Stock</option>
                </select>

                <input type="range"
                    className="range range-primary w-40"
                    min={0}
                    max={100}
                    step={10}
                    onChange={(e) => handleFilterChange("price", e.target.value)}
                    defaultValue={priceRange}
                />
            </div>

            {/* Loading State */}
            {isLoading && <p className="text-center text-gray-500">Loading products...</p>}

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {products?.data?.length ? (
                    products.data.map((product: any) => (
                        <div key={product._id} className="card bg-base-100 shadow-lg p-4">
                            <div className="card-body">
                                <h2 className="card-title">{product.title}</h2>
                                <p className="text-sm text-gray-500">{product.author}</p>
                                <p className="font-semibold text-lg">${product.price}</p>
                                <p className="text-xs badge badge-secondary">{product.category}</p>
                                <p className={`badge ${product.inStock ? "badge-success" : "badge-error"}`}>
                                    {product.inStock ? "In Stock" : "Out of Stock"}
                                </p>
                                <div className="card-actions justify-end">
                                    <Link to={`/product/${product._id}`} className="btn btn-primary">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">No products found.</p>
                )}
            </div>
        </div>
    );
};

export default Products;
