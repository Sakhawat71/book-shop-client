import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const baseQuery = fetchBaseQuery({
    baseUrl: "https://book-shop-server-71.vercel.app/api",
    // baseUrl: "http://localhost:5000/api",
    credentials: "include",
    prepareHeaders(headers, { getState }) {

        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
            headers.set("Content-Type", "application/json");
        }
        return headers;
    },
});

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery,
    tagTypes : ['Products'],
    endpoints: () => ({}),
});