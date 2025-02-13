import { baseApi } from "../../api/baseApi";

const adminManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getUsers: builder.query({
            query: () => {
                return {
                    url: `/users`,
                    method: 'GET',
                }
            }
        }),

        addProduct: builder.mutation({
            query: (data) => ({
                url: '/products',
                method: 'POST',
                body: data,
            })
        }),

        


    })
});


export const {
    useGetUsersQuery,
    useAddProductMutation,
} = adminManagementApi;