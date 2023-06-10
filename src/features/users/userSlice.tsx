import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = `https://jsonplaceholder.typicode.com/users`;
const loadAllUsersAPI = () => {
    return fetch(URL);
};
export const loadAllUsers = createAsyncThunk("users/loadAllUsers", async () => {
    const response = await loadAllUsersAPI();
    return response.json();
});
export interface userData {
    id: number;
    name: string;
}
type userArr = Array<userData>;
const initialState: userArr = [
    { id: 1, name: "Kaung si thu" },
    { id: 2, name: "Aye Aye" },
    { id: 3, name: "Kyaw Kyaw" },
    { id: 4, name: "Min Din" },
];
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadAllUsers.fulfilled, (_, action) => {
            return action.payload;
        });
    },
});
export const selectAllUsers = (state: RootState) => state.users;
export default userSlice.reducer;
