import toast from "react-hot-toast";
import { billInterface } from "../../../interfaces/bill.interface";
import { apiSlice } from "../apiSlice";

export const billsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBills: builder.query({
            query: () => `/billing-list`,
        }),
        addBill: builder.mutation({
            query: (data) => ({
                url: "/add-billing",
                method: "POST",
                body: data,
            }),
            onQueryStarted: async (
                arg,
                { queryFulfilled, dispatch, getState }
            ) => {
                try {
                    dispatch(
                        apiSlice.util.updateQueryData(
                            /* @ts-ignore:disable-next-line */
                            "getBills",
                            undefined,
                            (draft: billInterface[]) => {
                                draft.unshift({
                                    ...arg,
                                    _id: "generating id...",
                                });
                            }
                        )
                    );

                    const { data } = await queryFulfilled;

                    if (data?._id) {
                        dispatch(
                            apiSlice.util.updateQueryData(
                                /* @ts-ignore:disable-next-line */
                                "getBills",
                                undefined,
                                (draft: billInterface[]) => {
                                    const bill = draft.find(
                                        (v) => v._id === "generating id..."
                                    );
                                    bill!._id = data._id;
                                }
                            )
                        );
                        toast.success("Bill added successfully!");
                    } else {
                        dispatch(
                            apiSlice.util.updateQueryData(
                                /* @ts-ignore:disable-next-line */
                                "getBills",
                                undefined,
                                (draft: billInterface[]) =>
                                    draft.filter(
                                        (v) => v._id !== "generating id..."
                                    )
                            )
                        );

                        toast.error("Bill adding failed!");
                    }
                } catch (error) {
                    toast.error((error as Error)?.message);
                }
            },
        }),
        editBill: builder.mutation({
            query: ({ id, data }) => ({
                url: `/update-billing/${id}`,
                method: "PATCH",
                body: data,
            }),
            onQueryStarted: async (
                arg,
                { queryFulfilled, dispatch, getState }
            ) => {
                try {
                    const { data } = await queryFulfilled;

                    if (data?._id) {
                        toast.success("Bill updated successfully!");
                    }
                } catch (error) {
                    toast.error((error as Error)?.message);
                }
            },
        }),
        deleteBill: builder.mutation({
            query: (id) => ({
                url: `/delete-billing/${id}`,
                method: "DELETE",
            }),
            onQueryStarted: async (
                arg,
                { queryFulfilled, dispatch, getState }
            ) => {
                try {
                    const { data } = await queryFulfilled;

                    if (data?._id) {
                        dispatch(
                            apiSlice.util.updateQueryData(
                                /* @ts-ignore:disable-next-line */
                                "getBills",
                                undefined,
                                (draft: billInterface[]) =>
                                    draft.filter((v) => v._id !== data._id)
                            )
                        );

                        toast.success("Bill deleted successfully!");
                    }
                } catch (error) {
                    toast.error((error as Error)?.message);
                }
            },
        }),
    }),
});

export const {
    useGetBillsQuery,
    useAddBillMutation,
    useEditBillMutation,
    useDeleteBillMutation,
} = billsApi;
