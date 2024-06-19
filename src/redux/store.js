import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import cartReducer from "./reducers/cartSlice";
import dashboardReducer from "./reducers/dashboardSlice";
import logger from "redux-logger";
import { todoReducer } from "./reducers/todoReducer";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    counter: counterReducer,
    cart: cartReducer,

    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
