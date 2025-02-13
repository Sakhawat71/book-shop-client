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


        getOrderById: builder.query({
            query: (id: string) => ({
                url: `/orders/${id}`,
                method: 'GET',
            })

        })
    })
});


export const {
    useCreateOrderMutation,
    useGetAllOrdersQuery,
    useGetOrderByIdQuery
} = ordersManagementApi;