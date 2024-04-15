import { createAsyncThunk } from "@reduxjs/toolkit";

// create the userList
export const createUserList = createAsyncThunk(
  "createUserList",
  async (data: any) => {
    const response = await fetch(
      "https://64ae452bc85640541d4cb798.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      alert("Error creating user list");
    }
  }
);

// display the userlist

export const displayUserList = createAsyncThunk("displayUserList", async () => {
  const response = await fetch(
    "https://64ae452bc85640541d4cb798.mockapi.io/crud"
  );
  try {
    const result = await response.json();
    return result;
  } catch (error) {
    alert("Error displaying user list");
  }
});

// DELETE the userlist

export const deleteUserList: any = createAsyncThunk(
  "deleteUserList",
  async (id: any) => {
    const response = await fetch(
      `https://64ae452bc85640541d4cb798.mockapi.io/crud/${id}`,
      {
        method: "DELETE",
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      alert("Error Deleting user list");
    }
  }
);

// Update the userlist

export const updateUserList = createAsyncThunk(
  "updateUserList",
  async (data: any) => {
    const response = await fetch(
      `https://64ae452bc85640541d4cb798.mockapi.io/crud/${data.id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      alert("Error Updating user list");
    }
  }
);


// Get/display the productlist....
export const displayProductList = createAsyncThunk(
  "displayProductList",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      alert("Something went wrong");
    }
  }
);

// // create the product List....

export const createProductList = createAsyncThunk(
  "createProductList",
  async (data: any) => {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      alert("Error creating product list");
    }
  }
);

// delete the product List
export const deleteProductList: any = createAsyncThunk(
  "deleteProductList",
  async (id: any) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      alert("Error Deleting product list");
    }
  }
);
