import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
export interface reactions__Collection {
    thumbsUp: number;
    love: number;
    angry: number;
}
export interface postsType {
    userId?: number;
    id: string;
    title?: string;
    author?: string;
    body?: string;
    reactions?: reactions__Collection;
}
export interface postCollection {
    items: Array<postsType>;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: null;
}

const initialState: postCollection = {
    items: [
        {
            userId: 1,
            id: nanoid(),
            title: "minglar par",
            body: "lorem ipsum bar nyar",
            author: "Kaung Si Thu",
            reactions: {
                thumbsUp: 0,
                love: 0,
                angry: 0,
            },
        },
    ],
    status: "idle",
    error: null,
};
const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: {
            reducer: (state, action: PayloadAction<postsType>) => {
                state.items.push(action.payload);
            },
            prepare: (title: string, body: string, author: string) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        body,
                        author,
                        reactions: {
                            thumbsUp: 0,
                            love: 0,
                            angry: 0,
                        },
                    },
                };
            },
        },
    },
});
export const { addPost } = postSlice.actions;
export const selectAllPosts = (state: RootState) => state.posts.items;
export const selectStatus = (state: RootState) => state.posts.status;
export const selectError = (state: RootState) => state.posts.error;
export default postSlice.reducer;
