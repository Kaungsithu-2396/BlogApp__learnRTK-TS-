import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/Post_List/PostSlice";
import userReducer from "../features/users/userSlice";
export const store = configureStore({
    reducer: {
        posts: postReducer,
        users: userReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
