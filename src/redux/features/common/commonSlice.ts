import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
    name: "common",
    initialState: { search: "" },
    reducers: {
        setSearch: (state, { payload }: { payload: string }) => {
            state.search = payload;
        },
    },
});

export const commonActions = commonSlice.actions;
export const commonReducer = commonSlice.reducer;
