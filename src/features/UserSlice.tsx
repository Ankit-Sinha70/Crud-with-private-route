import { createSlice } from "@reduxjs/toolkit";
import {
  createProductList,
  createUserList,
  deleteProductList,
  deleteUserList,
  displayProductList,
  displayUserList,
  updateUserList,
} from "./UserService";

export const UserSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: [],
    products: [],
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
      })

      // create the product list
      .addCase(createProductList.pending, (state: any) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(createProductList.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.isSuccess = true;
        state.users.unshift(action.payload);
      })
      .addCase(createProductList.rejected, (state: any, action: any) => {
        state.loading = false;
        state.isSuccess = false;
        state.users = action.payload;
      })


      // // display the product list
      .addCase(displayProductList.pending, (state: any) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(displayProductList.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(displayProductList.rejected, (state: any, action: any) => {
        state.loading = false;
        state.isSuccess = false;
        state.products = action.payload;
      })

      // // delete the product list

      .addCase(deleteProductList.pending, (state: any) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(deleteProductList.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.isSuccess = true;
        const { id } = action.payload;
        state.products = state.products.filter((ele: any) => ele.id !== id);
      })
      .addCase(deleteProductList.rejected, (state: any, action: any) => {
        state.loading = false;
        state.isSuccess = false;
        state.products = action.payload;
      })
  },
});

export default UserSlice.reducer;
