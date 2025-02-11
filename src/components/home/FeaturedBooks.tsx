import { Link } from "react-router";
import ProductCard from "../../pages/Products/ProductCard";
import { useGetProductsQuery } from "../../redux/features/products/productsManagement.api";
import { IProduct } from "../../types/productes.type";

const FeaturedBooks = () => {

    const { data: productes } = useGetProductsQuery({});

    // first 4 products
    const featuredBooks = productes?.data?.slice(0, 6);
    // console.log(featuredBooks);

    return (
        <div className="my-12">
            <h2 className="text-3xl font-bold mb-8">Featured Books</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredBooks?.map((product: IProduct) =>
                    <ProductCard key={product._id} product={product} />
                )}
            </div>

            <div className="flex mx-auto justify-center mt-8">
                <Link
                    to='/products'
                    className="btn btn-primary btn-lg mt-8"
                >View All Books</Link>
            </div>

        </div>
    );
};

export default FeaturedBooks;