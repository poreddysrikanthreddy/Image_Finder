import axios from "axios";
import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://api.unsplash.com";

const initialState = {
  user: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const userAdded = createAsyncThunk(
  "user/photos",
  async (initialPost) => {
    try {
      const response = await axios.get(
        `search/photos?page=1&query=${initialPost.search}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
      return {
        nanoid: nanoid(),
        name: initialPost.name,
        surname: initialPost.surname,
        image: response.data.results[0]?.urls.small,
      };
    } catch (err) {
      return {};
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

        state.user = [...state.user, action.payload];
      })
      .addCase(userAdded.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectUserCards = (state) => state.users?.user;

export default userSlice.reducer;
