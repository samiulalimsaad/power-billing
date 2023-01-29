import { apiSlice } from "../apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({ url: "/register", method: "POST", body: data }),
            onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem("auth", JSON.stringify(result?.data));
                } catch (error) {
                    // handle form UI
                }
            },
        }),
        login: builder.mutation({
            query: (data) => ({ url: "/login", method: "POST", body: data }),
            onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem("auth", JSON.stringify(result?.data));
                } catch (error) {
                    // handle form UI
                }
            },
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
