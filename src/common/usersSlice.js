import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => fetch('https://fakestoreapi.com/users').then((res) => res.json()));

export const usersSlice = createSlice({
  name: 'users',
  initialState: { status: null, data: [] },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
    },
    [fetchUsers.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default usersSlice.reducer;

export const selectUsersData = (state) => state.users.data;
export const selectUsersStatus = (state) => state.users.status;
