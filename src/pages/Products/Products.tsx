import { useState } from 'react';
import { useGetProductsQuery } from "../../redux/features/products/productsManagement.api";
import ProductCard from "./ProductCard";
import { IProduct } from "../../types/productes.type";

const Products = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: products, isLoading } = useGetProductsQuery(searchTerm);
    

    // Frontend filter states
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');
    const [inStock, setInStock] = useState('');
    const [priceRange, setPriceRange] = useState('1000');

    // Get unique filter options from products
    const categories = Array.from(new Set(products?.data?.map(p => p.category)));
    const authors = Array.from(new Set(products?.data?.map(p => p.author)));

    // Filter products locally
    const filteredProducts = products?.data?.filter((product : IProduct) => {
        const matchesCategory = category ? product.category === category : true;
        const matchesAuthor = author ? product.author === author : true;
        const matchesStock = inStock ? product.inStock === (inStock === 'true') : true;
        const matchesPrice = product.price <= Number(priceRange);
        
        return matchesCategory && matchesAuthor && matchesStock && matchesPrice;
    });

    return (
        <div className="container mx-auto px-4 py-8 bg-gray-100 shadow-2xs">
            {/* Search & Filters Section */}
            <div className="sticky top-0 bg-base-100 z-10 border-b border-gray-200">
                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto mb-6 bg-gray-200">
                    <input
                        type="text"
                        placeholder="Search books..."
                        className="input input-lg w-full pl-12 pr-4 rounded-full border-2 border-primary focus:border-secondary focus:ring-0"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <svg 
                        className="absolute left-4 top-4 h-6 w-6 text-gray-400"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                        />
                    </svg>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 items-center justify-center">
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn btn-outline btn-sm">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            Filters
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-4 shadow bg-base-100 rounded-box w-64 space-y-4">
                            {/* Category Filter */}
                            <div>
                                <label className="label label-text">Category</label>
                                <select
                                    className="select select-bordered select-sm w-full"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="">All Categories</option>
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Author Filter */}
                            <div>
                                <label className="label label-text">Author</label>
                                <select
                                    className="select select-bordered select-sm w-full"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                >
                                    <option value="">All Authors</option>
                                    {authors.map(auth => (
                                        <option key={auth} value={auth}>{auth}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Price Filter */}
                            <div>
                                <label className="label label-text">Max Price: ${priceRange}</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(e.target.value)}
                                    className="range range-primary range-xs"
                                />
                            </div>

                            {/* Stock Filter */}
                            <div>
                                <label className="label label-text">Availability</label>
                                <select
                                    className="select select-bordered select-sm w-full"
                                    value={inStock}
                                    onChange={(e) => setInStock(e.target.value)}
                                >
                                    <option value="">All</option>
                                    <option value="true">In Stock</option>
                                    <option value="false">Out of Stock</option>
                                </select>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Loading State */}
            {isLoading && (
                <div className="text-center mt-12">
                    <div className="loading loading-lg loading-spinner text-primary"></div>
                    <p className="mt-4 text-gray-500">Searching our library...</p>
                </div>
            )}

            {/* Results Count */}
            {!isLoading && (
                <div className="mt-6 text-sm text-gray-500 text-center">
                    Found {filteredProducts?.length || 0} results
                </div>
            )}

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                {filteredProducts?.map((product: IProduct) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>

            {/* Empty State */}
            {!isLoading && filteredProducts?.length === 0 && (
                <div className="text-center mt-12">
                    <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">No books found</h3>
                    <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filters</p>
                </div>
            )}
        </div>
    );
};

export default Products;