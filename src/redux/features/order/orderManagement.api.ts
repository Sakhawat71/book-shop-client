import { baseApi } from "../../api/baseApi";

const ordersManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        createOrder: builder.mutation({
            query: (data) => {
                return {
                    url: '/orders/create-order',
                    method: 'POST',
                    body: data
                }
            }
        }),

        getAllOrders: builder.query({
            query: () => ({
                url: `/orders`,
                method: 'GET',
            })
        }),


        getOrderByEmail: builder.query({
            query: (email: string) => ({
                url: `/orders/${email}`,
                method: 'GET',
            })

        })
    })
});


export const {
    useCreateOrderMutation,
    useGetAllOrdersQuery,
    useGetOrderByEmailQuery,
} = ordersManagementApi;