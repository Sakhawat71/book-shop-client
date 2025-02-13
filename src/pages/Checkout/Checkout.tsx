import { useState } from "react";
import { useParams } from "react-router";
import { FieldValues, useForm } from "react-hook-form";
import { useGetProductByIdQuery } from "../../redux/features/products/productsManagement.api";
import { useAppSelector } from "../../redux/hooks";
import LoadingSpinner from "../../components/layout/LoadingSpinner";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifytoken } from "../../utils/verifyToken";
import { toast } from "sonner";
import { useCreateOrderMutation } from "../../redux/features/order/orderManagement.api";



const CheckoutPage = () => {
    const { id } = useParams<{ id: string }>();
    // const navigate = useNavigate();
    const token = useAppSelector(useCurrentToken);
    const user = verifytoken(token as string);
    const { data: product, isLoading: isProductLoading } = useGetProductByIdQuery(id as string);
    const [createOrder] = useCreateOrderMutation()

    const [quantity, setQuantity] = useState(1);
    const { register, handleSubmit } = useForm();


    if (!user || isProductLoading) return <LoadingSpinner />;

    const onSubmit = async (data: FieldValues) => {
        if (quantity > product.data.quantity) {
            toast.warning("Requested quantity exceeds available stock.");
            return;
        }


        const orderPayload = {
            email: user.userEmail,
            product: product.data._id,
            quantity: quantity,
            totalPrice: product.data.price * quantity,
            user: data
        };

        const toastId = toast.loading('Proceeding to Payment...')
        try {
            const res = await createOrder(orderPayload);
            window.location.href=res?.data?.data?.payment?.checkout_url
            toast.success("Payment successful",{id : toastId});
        } catch (error) {
            toast.error('Payment unsuccessful',{id: toastId})
        }

    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

            <div className="max-w-2xl mx-auto">
                <div className="bg-base-100 shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    {product?.data ? (
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold">{product?.data?.title}</h3>
                                <p className="font-semibold">${product?.data?.price?.toFixed(2)}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <label className="font-medium">Quantity:</label>
                                <input
                                    type="number"
                                    className="input input-bordered w-20"
                                    value={quantity}
                                    onChange={(e) => {
                                        const value = parseInt(e.target.value, 10);
                                        if (value > 0 && value <= product.data.quantity) setQuantity(value);
                                    }}
                                    min={1}
                                    max={product.data.quantity}
                                />
                                <span className="text-sm text-gray-500">{product.data.quantity} available</span>
                            </div>
                            <div className="border-t pt-4 flex justify-between font-semibold">
                                <span>Total</span>
                                <span>${(product.data.price * quantity).toFixed(2)}</span>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">Product not found.</p>
                    )}
                </div>

                <form className="bg-white shadow-md rounded-2xl p-6" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Shipping Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <label className="text-gray-600 text-sm font-medium">Email Address</label>
                            <input className="input input-bordered w-full bg-gray-100 cursor-not-allowed" value={user.userEmail} readOnly />
                        </div>
                        <div>
                            <label className="text-gray-600 text-sm font-medium">Full Name</label>
                            <input className="input input-bordered w-full" placeholder="Enter your full name" {...register("name", { required: true })} />
                        </div>
                        <div>
                            <label className="text-gray-600 text-sm font-medium">Phone Number</label>
                            <input className="input input-bordered w-full" placeholder="Enter your phone number" type="number" {...register("phone", { required: true })} />
                        </div>
                        <div className="col-span-2">
                            <label className="text-gray-600 text-sm font-medium">Shipping Address</label>
                            <input className="input input-bordered w-full" placeholder="Enter your address" {...register("address", { required: true })} />
                        </div>
                        <div>
                            <label className="text-gray-600 text-sm font-medium">City</label>
                            <input className="input input-bordered w-full" placeholder="Enter your city" {...register("city", { required: true })} />
                        </div>
                    </div>
                    <button className="btn btn-primary w-full mt-6" type="submit" disabled={!product?.data?.inStock}>Confirm Order</button>
                </form>

                {!product?.data?.inStock && <div className="text-red-500 mt-4 text-center">This product is out of stock.</div>}

            </div>
        </div>
    );
};

export default CheckoutPage;