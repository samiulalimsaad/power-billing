import toast from "react-hot-toast";
import { billInterface } from "../../../interfaces/bill.interface";
import { apiSlice } from "../apiSlice";

export const billsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBills: builder.query({
            query: (page) => `/billing-list?page=${page || 1}`,
        }),
        getSearchedBills: builder.query({
            query: (text) => `/billing-search?text=${text || ""}`,
        }),
        getBillAmount: builder.query({
            query: () => `/billing-total`,
            providesTags: ["total"],
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
                            1,
                            (draft: { bills: billInterface[] }) => {
                                draft?.bills.unshift({
                                    ...arg,
                                    _id: "generating id...",
                                });
                            }
                        )
                    );
                    dispatch(
                        apiSlice.util.updateQueryData(
                            /* @ts-ignore:disable-next-line */
                            "getBillAmount",
                            undefined,
                            (draft: string) =>
                                parseInt(draft) + parseInt(arg.paidAmount)
                        )
                    );

                    const { data } = await queryFulfilled;

                    if (data?._id) {
                        dispatch(
                            apiSlice.util.updateQueryData(
                                /* @ts-ignore:disable-next-line */
                                "getBills",
                                1,
                                (draft: { bills: billInterface[] }) => {
                                    const bill = draft.bills.find(
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
                                1,
                                (draft: { bills: billInterface[] }) =>
                                    draft.bills.filter(
                                        (v) => v._id !== "generating id..."
                                    )
                            )
                        );
                        dispatch(
                            apiSlice.util.updateQueryData(
                                /* @ts-ignore:disable-next-line */
                                "getBillAmount",
                                undefined,
                                (draft: string) =>
                                    parseInt(draft) - parseInt(arg.paidAmount)
                            )
                        );
                        toast.error("Bill adding failed!");
                    }
                } catch (error) {
                    dispatch(
                        apiSlice.util.updateQueryData(
                            /* @ts-ignore:disable-next-line */
                            "getBills",
                            1,
                            (draft: { bills: billInterface[] }) =>
                                draft.bills.filter(
                                    (v) => v._id !== "generating id..."
                                )
                        )
                    );
                    dispatch(
                        apiSlice.util.updateQueryData(
                            /* @ts-ignore:disable-next-line */
                            "getBillAmount",
                            undefined,
                            (draft: string) =>
                                parseInt(draft) - parseInt(arg.paidAmount)
                        )
                    );
                    // @ts-ignore
                    toast.error(error?.data?.message || "Bill adding failed!");
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
                        dispatch(
                            apiSlice.util.updateQueryData(
                                /* @ts-ignore:disable-next-line */
                                "getBills",
                                1,
                                (draft: { bills: billInterface[] }) => {
                                    let bill = draft.bills.findIndex(
                                        (v) => v._id === data._id
                                    );
                                    draft.bills[bill] = data;
                                }
                            )
                        );
                        toast.success("Bill updated successfully!");
                    }
                } catch (error) {
                    toast.error((error as Error)?.message);
                }
            },
            invalidatesTags: ["total"],
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
                                1,
                                (draft: {
                                    bills: billInterface[];
                                    count: number;
                                }) => {
                                    const bills = draft.bills.filter(
                                        (v) => v._id !== data._id
                                    );
                                    return { bills, count: draft.count };
                                }
                            )
                        );
                        dispatch(
                            apiSlice.util.updateQueryData(
                                /* @ts-ignore:disable-next-line */
                                "getBillAmount",
                                undefined,
                                (draft: string) =>
                                    parseInt(draft) - parseInt(data.paidAmount)
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
    useGetSearchedBillsQuery,
    useGetBillAmountQuery,
    useAddBillMutation,
    useEditBillMutation,
    useDeleteBillMutation,
} = billsApi;
