import {
    PayloadAction,
    createAsyncThunk,
    createSlice,
    nanoid,
} from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import PostAPI from "./PostAPI";

export type T = keyof reactions__Collection;

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
}

export interface AsyncStateDetect extends postCollection {
    status: "idle" | "loading" | "succeeded" | "failed";
    error: null;
}
export const loadAllPosts = createAsyncThunk("posts/loadAllTodo", async () => {
    const response = await PostAPI();
    const data = await response.json();
    return data;
});

const initialState: AsyncStateDetect = {
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
        addReaction: (state: AsyncStateDetect, action) => {
            const { postId, reaction } = action.payload;
            const findTargetPost = state.items.find((el) => el.id === postId);
            if (findTargetPost) {
                findTargetPost.reactions &&
                    findTargetPost.reactions[
                        reaction as keyof reactions__Collection
                    ]++;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadAllPosts.pending, () => {
                console.log("loading...");
            })
            .addCase(loadAllPosts.fulfilled, (state, action) => {
                const loadedPost = action.payload.map((el: any) => {
                    el.reactions = {
                        thumbsUp: 0,
                        love: 0,
                        angry: 0,
                    };
                    return el;
                });
                state.items = loadedPost;
            });
    },
});
export const { addPost, addReaction } = postSlice.actions;
export const selectAllPosts = (state: RootState) => state.posts.items;
export const selectStatus = (state: RootState) => state.posts.status;
export const selectError = (state: RootState) => state.posts.error;
export default postSlice.reducer;
