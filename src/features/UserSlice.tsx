import { createSlice } from "@reduxjs/toolkit";
import {
  createUserList,
  deleteUserList,
  displayUserList,
  updateUserList,
} from "./UserService";

export const UserSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: [],
    loading: false,
    isSuccess: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserList.pending, (state: any) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(createUserList.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.isSuccess = true;
        state.users.unshift(action.payload);
      })
      .addCase(createUserList.rejected, (state: any, action: any) => {
        state.loading = false;
        state.isSuccess = false;
        state.users = action.payload;
      })

      // display the user list
      .addCase(displayUserList.pending, (state: any) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(displayUserList.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(displayUserList.rejected, (state: any, action: any) => {
        state.loading = false;
        state.isSuccess = false;
        state.users = action.payload;
      })

      // delete the user list

      .addCase(deleteUserList.pending, (state: any) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(deleteUserList.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.isSuccess = true;
        const { id } = action.payload;
        state.users = state.users.filter((ele: any) => ele.id !== id);
      })
      .addCase(deleteUserList.rejected, (state: any, action: any) => {
        state.loading = false;
        state.isSuccess = false;
        state.users = action.payload;
      })

      // update the userlist

      .addCase(updateUserList.pending, (state: any) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(updateUserList.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.isSuccess = true;
        state.users = state.users?.map((elem: any) =>
          elem.id === action.payload.id ? action.payload : elem
        );
      })
      .addCase(updateUserList.rejected, (state: any, action: any) => {
        state.loading = false;
        state.isSuccess = false;
        state.users = action.payload;
      });
  },
});

export default UserSlice.reducer;
