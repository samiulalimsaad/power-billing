import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_APP_SERVER_URL}/api`,
    prepareHeaders: async (headers, { getState, endpoint }) => {
        const token = localStorage.getItem("auth");
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (arg, api, options) => {
        const result = await baseQuery(arg, api, options);

        return result;
    },
    endpoints: (builder) => ({}),
    tagTypes: ["total"],
});
