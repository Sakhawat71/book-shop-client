import { IProduct } from "../../types/productes.type";


const ProductCard = ({product}: {product: IProduct}) => {

    console.log(product);

    return (
        <div className="card w-96 bg-base-100 card-md shadow-green-700 shadow-2xl">
            <div className="card-body">
                <h2 className="card-title">Medium Card</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;