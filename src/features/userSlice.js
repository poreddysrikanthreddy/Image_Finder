import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axiosHandler from "../api/config";

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

const initialState = {
  user: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const userAdded = createAsyncThunk(
  "user/photos",
  async (initialPost) => {
    try {
      const response = await axiosHandler.get(
        `search/photos?page=1&query=${initialPost.search}&client_id=${ACCESS_KEY}`
      );
      return {
        nanoid: nanoid(),
        name: initialPost.name,
        surname: initialPost.surname,
        image: response.data.results,
      };
    } catch (err) {
      return err.message;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,

  extraReducers(builder) {
    builder
      .addCase(userAdded.pending, (state, action) => {
        state.status = "loading";
      })

      .addCase(userAdded.fulfilled, (state, action) => {
        state.user.push(action.payload);
        state.status = "idle";
      })
      .addCase(userAdded.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectUserCards = (state) => state.users;

export default userSlice.reducer;
