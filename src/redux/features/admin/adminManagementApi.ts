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

        


    })
});


export const {
useGetUsersQuery,
} = adminManagementApi;