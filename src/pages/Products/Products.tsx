import { useGetProductsQuery } from "../../redux/features/products/productsManagement.api";
import ProductCard from "./ProductCard";
import { IProduct } from "../../types/productes.type";

const Products = () => {

    const { data: products, isLoading } = useGetProductsQuery('');
    console.log(products);

    // {
    //     _id,
    //     title,
    //     author,
    //     price,
    //     category,
    //     description,
    //     quantity,
    //     inStock,
    //     createdAt,
    // } 
    // product type 


    // Handle search input
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {

    };


    return (
        <div className="container mx-auto px-4 py-6">
            {/* Search & Filters */}
            
            <div className="flex flex-col md:flex-row items-center gap-4">
                <input
                    type="text"
                    placeholder="Search by title, author, or category..."
                    className="input input-bordered w-full md:w-1/2"
                    onChange={handleSearch}
                    // value={search}
                />

                <select
                    className="select select-bordered"
                    // onChange={(e) => handleFilterChange("category", e.target.value)}
                    // value={category}
                >
                    <option value="">All Categories</option>
                    <option value="fiction">Fiction</option>
                    <option value="non-fiction">Non-Fiction</option>
                    <option value="fantasy">Fantasy</option>
                </select>

                <select
                    className="select select-bordered"
                    // onChange={(e) => handleFilterChange("author", e.target.value)}
                    // value={author}
                >
                    <option value="">All Authors</option>
                    <option value="J.K. Rowling">J.K. Rowling</option>
                    <option value="George Orwell">George Orwell</option>
                </select>

                <select
                    className="select select-bordered"
                    // onChange={(e) => handleFilterChange("inStock", e.target.value)}
                    // value={inStock}
                >
                    <option value="">Availability</option>
                    <option value="true">In Stock</option>
                    <option value="false">Out of Stock</option>
                </select>

                <input
                    type="range"
                    className="range range-primary w-40"
                    min={0}
                    max={100}
                    step={10}
                    // onChange={(e) => handleFilterChange("price", e.target.value)}
                    // value={priceRange}
                />
            </div>

            {/* Loading State */}
            {isLoading && <p className="text-center text-gray-500">Loading products...</p>}

            {/* Product List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-10 mt-10 ">
                {products?.data?.map((product : IProduct) => <ProductCard product={product} key={product._id}  />)}
            </div>
        </div>
    );
};

export default Products;
