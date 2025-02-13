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

        // getProductById: builder.query({
        //     query: (id: string) => ({
        //         url: `/products/${id}`,
        //         method: 'GET',
        //     })

        // })
    })
});


export const {
    useCreateOrderMutation

} = ordersManagementApi;