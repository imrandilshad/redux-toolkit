import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  //define initial states
  userList: [],
  isLoading: false,
};
export const getUserList = createAsyncThunk('getUserList', async () => {
  const res = await fetch('https://reqres.in/api/users/');
  const json = await res.json();
  return json.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserList.pending, (state) => {
        state.isLoading = true;
        state.userList = [];
        state.isError = null;
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userList = action.payload;
      })
      .addCase(getUserList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error;
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
