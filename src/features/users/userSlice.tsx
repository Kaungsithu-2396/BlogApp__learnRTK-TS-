import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
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
});
export const selectAllUsers = (state: RootState) => state.users;
export default userSlice.reducer;
