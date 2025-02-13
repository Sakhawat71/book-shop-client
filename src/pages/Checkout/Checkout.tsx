import { useState } from "react";
import { useParams, useNavigate } from "react-router";
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
    const navigate = useNavigate();
    const token = useAppSelector(useCurrentToken);
    const user = verifytoken(token as string);
    const { data: product, isLoading: isProductLoading } = useGetProductByIdQuery(id as string);
    const [createOrder] = useCreateOrderMutation()

    const [quantity, setQuantity] = useState(1);
    const { register, handleSubmit, setValue, watch } = useForm();


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

        const res = await createOrder(orderPayload)

        console.log("Order Payload:", orderPayload);
        console.log("Order res :", res);
        toast.success("Proceeding to Payment...");
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




// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router";
// import { useGetProductByIdQuery } from "../../redux/features/products/productsManagement.api";
// import { useAppSelector } from "../../redux/hooks";
// import LoadingSpinner from "../../components/layout/LoadingSpinner";
// import { useCurrentToken } from "../../redux/features/auth/authSlice";
// import { verifytoken } from "../../utils/verifyToken";
// import { toast } from "sonner";



// const CheckoutPage = () => {
//     const { id } = useParams<{ id: string }>();
//     const navigate = useNavigate();
//     const token = useAppSelector(useCurrentToken);
//     const user = verifytoken(token as string);
//     const [quantity, setQuantity] = useState(1);
//     const { data: product, isLoading: isProductLoading } = useGetProductByIdQuery(id as string);

//     // console.log(product);

//     // Create order mutation
//     // const [createOrder, { isLoading: isOrderLoading }] = useCreateOrderMutation();

//     // Handle quantity change
//     const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = parseInt(e.target.value, 10);
//         if (value > 0 && value <= (product?.data?.quantity || 1)) {
//             setQuantity(value);
//         }
//     };

//     const [userDetails, setUserDetails] = useState({
//         name: "",
//         address: "",
//         city: "",
//         phone: "",
//     });


//     // Handle order submission
//     const handleOrderSubmit = async () => {
//         if (!user || !product?.data) return;

//         if (quantity > product.data.quantity) {
//             toast.warning("Requested quantity exceeds available stock.");
//             return;
//         }

//         const orderPayload = {
//             email: user.userEmail,
//             product: product.data._id,
//             quantity: quantity,
//             totalPrice: product.data.price * quantity,
//             user: {
//                 ...userDetails
//             }
//         };

//         console.log(orderPayload);
//         // try {
//         //     const result = await createOrder(orderPayload).unwrap();
//         //     if (result.success) {
//         //         alert("Order placed successfully!");
//         //         navigate("/");
//         //     }
//         // } catch (error) {
//         //     alert("Failed to place order. Please try again.");
//         // }
//     };

//     // Redirect if not logged in
//     useEffect(() => {
//         if (!user) {
//             navigate("/login");
//         }
//     }, [user, navigate]);

//     if (!user || isProductLoading) return <LoadingSpinner />;

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

//             <div className="max-w-2xl mx-auto">
//                 {/* Product Details */}
//                 <div className="bg-base-100 shadow-lg rounded-lg p-6 mb-6">
//                     <h2 className="text-xl font-bold mb-4">Order Summary</h2>
//                     {product?.data ? (
//                         <div className="space-y-4">
//                             <div className="flex items-center gap-4">
//                                 <div className="flex-1">
//                                     <h3 className="font-semibold">{product?.data?.title}</h3>
//                                     <p className="text-sm text-gray-500">{product?.data?.author}</p>
//                                 </div>
//                                 <p className="font-semibold">${product?.data?.price?.toFixed(2)}</p>
//                             </div>

//                             <div className="flex items-center gap-4">
//                                 <label htmlFor="quantity" className="font-medium">Quantity:</label>
//                                 <input
//                                     type="number"
//                                     id="quantity"
//                                     className="input input-bordered w-20"
//                                     value={quantity}
//                                     onChange={handleQuantityChange}
//                                     min={1}
//                                     max={product?.data?.quantity}
//                                 />
//                                 <span className="text-sm text-gray-500">
//                                     {product.data.quantity} available
//                                 </span>
//                             </div>

//                             <div className="border-t pt-4">
//                                 <div className="flex justify-between font-semibold">
//                                     <span>Total</span>
//                                     <span>${(product.data.price * quantity).toFixed(2)}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     ) : (
//                         <p className="text-center text-gray-500">Product not found.</p>
//                     )}
//                 </div>

//                 {/* User Details */}
//                 <div className="bg-white shadow-md rounded-2xl p-6">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Shipping Details</h2>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {/* Email (Read-Only) */}
//                         <div className="col-span-2">
//                             <label className="text-gray-600 text-sm font-medium">Email Address</label>
//                             <input
//                                 type="email"
//                                 className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
//                                 value={user.userEmail}
//                                 readOnly
//                             />
//                         </div>

//                         {/* Full Name */}
//                         <div>
//                             <label className="text-gray-600 text-sm font-medium">Full Name</label>
//                             <input
//                                 type="text"
//                                 className="input input-bordered w-full"
//                                 placeholder="Enter your full name"
//                                 value={userDetails.name}
//                                 onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
//                                 required
//                             />
//                         </div>

//                         {/* Phone Number */}
//                         <div>
//                             <label className="text-gray-600 text-sm font-medium">Phone Number</label>
//                             <input
//                                 type="number"
//                                 className="input input-bordered w-full"
//                                 placeholder="Enter your phone number"
//                                 value={userDetails.phone}
//                                 onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
//                                 required
//                             />
//                         </div>

//                         {/* Shipping Address */}
//                         <div className="col-span-2">
//                             <label className="text-gray-600 text-sm font-medium">Shipping Address</label>
//                             <input
//                                 type="text"
//                                 className="input input-bordered w-full"
//                                 placeholder="Enter your full address"
//                                 value={userDetails.address}
//                                 onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
//                                 required
//                             />
//                         </div>

//                         {/* City */}
//                         <div>
//                             <label className="text-gray-600 text-sm font-medium">City</label>
//                             <input
//                                 type="text"
//                                 className="input input-bordered w-full"
//                                 placeholder="Enter your city"
//                                 value={userDetails.city}
//                                 onChange={(e) => setUserDetails({ ...userDetails, city: e.target.value })}
//                                 required
//                             />
//                         </div>
//                     </div>
//                 </div>




//                 {/* Order Button */}
//                 <button
//                     className="btn btn-primary w-full"
//                     onClick={() => handleOrderSubmit()}
//                     disabled={isProductLoading || !product?.data?.inStock}
//                 >
//                     {isProductLoading ? "Placing Order..." : "Confirm Order"}
//                 </button>

//                 {/* Stock Warning */}
//                 {!product?.data?.inStock && (
//                     <div className="text-red-500 mt-4 text-center">
//                         This product is currently out of stock.
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CheckoutPage;