import { baseApi } from "../../api/baseApi";

const productsManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        
        getProducts: builder.query({
            query: (params?: Record<string, any>) => ({
                url: '/products',
                method: 'GET',
                params
            })
        }),

    })
});


export const {
    useGetProductsQuery,

} = productsManagementApi;