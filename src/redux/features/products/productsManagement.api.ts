import { baseApi } from "../../api/baseApi";

const productsManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getProducts: builder.query({
            query: (params?: Record<string, any>) => {
                // console.log(params);
                // console.log( " search ",params?.searchTerm);
                return {
                    url: `/products?searchTerm=${params}`,
                    method: 'GET',
                }
            }

        }),

        getProductById: builder.query({
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