import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice";
import { commonReducer } from "./../features/common/commonSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        common: commonReducer,
    },
    devTools: import.meta.env.DEV,
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
