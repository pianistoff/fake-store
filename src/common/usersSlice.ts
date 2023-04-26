import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { RootState } from "./storeConfiguration";
import type { User } from "./types";

type UsersState = {
  status: "loading" | "success" | "failed" | null;
  data: User[];
};

const initialState: UsersState = { status: null, data: [] };

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () =>
  fetch("https://fakestoreapi.com/users").then((res) => res.json()),
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersLoading: (state) => {
      return {
        ...state,
        status: "loading",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        return {
          ...state,
          status: "loading",
        };
      })
      .addCase(fetchUsers.fulfilled, (_, action) => {
        return { data: action.payload, status: "success" };
      })
      .addCase(fetchUsers.rejected, (state) => {
        return {
          ...state,
          status: "failed",
        };
      });
  },
});

export default usersSlice.reducer;

export const selectUsersData = (state: RootState) => state.users.data;
export const selectUsersStatus = (state: RootState) => state.users.status;
