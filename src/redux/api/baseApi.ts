import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    credentials: "include",
    prepareHeaders(headers, { getState }) {
        const token = (getState() as RootState).auth.token;

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
            headers.set("Content-Type", "application/json");
            headers.set('Access-Control-Allow-Origin', '*'); 
            headers.set('withCredentials', 'true');
            
        }

        return headers;
    },
});

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery,
    tagTypes: [],
    endpoints: () => ({}),
});