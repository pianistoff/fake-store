import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    return fetch('https://fakestoreapi.com/users')
    .then(res=>res.json())
});

export const usersSlice = createSlice({
    name: 'users',
    initialState: { status: null, users: [] },
    extraReducers: {
       [fetchUsers.pending]: (state) => {
        state.status = 'loading'
       },
       [fetchUsers.fulfilled]: (state, {payload}) => {
        state.users = payload;
        state.status = 'success'
       },
       [fetchUsers.rejected]: (state) => {
        state.status = 'failed'
       }
    },
});

export default usersSlice.reducer;
