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

        getProductById : builder.query({
            query: (id: string) => ({
                url: `/products/${id}`,
                method: 'GET',
            })
            
        })
    })
});


export const {
    useGetProductsQuery,
    useGetProductByIdQuery,

} = productsManagementApi;