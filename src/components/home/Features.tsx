import ProductCard from "../../pages/Products/ProductCard";
import { useGetProductsQuery } from "../../redux/features/products/productsManagement.api";
import { IProduct } from "../../types/productes.type";

const Features = () => {

    const { data: productes } = useGetProductsQuery({});
    // console.log(productes?.data);

    // first 4 products
    const featuredBooks = productes?.data?.slice(0, 6);
    console.log(featuredBooks);

    return (
        <div className="my-12">
            <h2 className="text-3xl font-bold mb-8">Featured Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {featuredBooks?.data?.map((product: IProduct) => 
                    <ProductCard key={product._id} product={product} />
                )}
            </div>
        </div>
    );
};

export default Features;