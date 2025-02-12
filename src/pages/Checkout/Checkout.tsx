import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useGetProductByIdQuery } from "../../redux/features/products/productsManagement.api";
import { useAppSelector } from "../../redux/hooks";
import LoadingSpinner from "../../components/layout/LoadingSpinner";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifytoken } from "../../utils/verifyToken";



const CheckoutPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const token = useAppSelector(useCurrentToken);
    const user = verifytoken(token as string);
    const [quantity, setQuantity] = useState(1);
    const { data: product, isLoading: isProductLoading } = useGetProductByIdQuery(id as string);

    // console.log(product);

    // Create order mutation
    // const [createOrder, { isLoading: isOrderLoading }] = useCreateOrderMutation();

    // Handle quantity change
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (value > 0 && value <= (product?.data?.quantity || 1)) {
            setQuantity(value);
        }
    };

    // Handle order submission
    const handleOrderSubmit = async () => {
        if (!user || !product?.data) return;

        if (quantity > product.data.quantity) {
            alert("Requested quantity exceeds available stock.");
            return;
        }

        const orderPayload = {
            email: user.userEmail,
            product: product.data._id,
            quantity: quantity,
            totalPrice: product.data.price * quantity
        };

        console.log(orderPayload);
        // try {
        //     const result = await createOrder(orderPayload).unwrap();
        //     if (result.success) {
        //         alert("Order placed successfully!");
        //         navigate("/");
        //     }
        // } catch (error) {
        //     alert("Failed to place order. Please try again.");
        // }
    };

    // Redirect if not logged in
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    if (!user || isProductLoading) return <LoadingSpinner />;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>

            <div className="max-w-2xl mx-auto">
                {/* Product Details */}
                <div className="bg-base-100 shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    {product?.data ? (
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="flex-1">
                                    <h3 className="font-semibold">{product?.data?.title}</h3>
                                    <p className="text-sm text-gray-500">{product?.data?.author}</p>
                                </div>
                                <p className="font-semibold">${product?.data?.price?.toFixed(2)}</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <label htmlFor="quantity" className="font-medium">Quantity:</label>
                                <input
                                    type="number"
                                    id="quantity"
                                    className="input input-bordered w-20"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    min={1}
                                    max={product?.data?.quantity}
                                />
                                <span className="text-sm text-gray-500">
                                    {product.data.quantity} available
                                </span>
                            </div>

                            <div className="border-t pt-4">
                                <div className="flex justify-between font-semibold">
                                    <span>Total</span>
                                    <span>${(product.data.price * quantity).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">Product not found.</p>
                    )}
                </div>

                {/* User Details */}
                <div className="bg-base-100 shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-bold mb-4">Shipping Details</h2>
                    <div className="space-y-2">
                        {/* <p className="font-medium">{user?.name}</p> */}
                        <p className="text-gray-600">{user?.userEmail}</p>
                        {/* {user.address && (
                            <p className="text-sm text-gray-600">{user.address}</p>
                        )} */}
                    </div>
                </div>

                {/* Order Button */}
                <button
                    className="btn btn-primary w-full"
                    onClick={()=> handleOrderSubmit()}
                    disabled={isProductLoading || !product?.data?.inStock}
                >
                    {isProductLoading ? "Placing Order..." : "Confirm Order"}
                </button>

                {/* Stock Warning */}
                {!product?.data?.inStock && (
                    <div className="text-red-500 mt-4 text-center">
                        This product is currently out of stock.
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutPage;