import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async () => {
    const seriesText = "Friends";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${seriesText}&type=series`
    );
    return response.data;
  }
);
export const fetchAsyncMovieOrSeriesDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrSeriesDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  series: {},
  selectMovieOrSeries: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrSeries: (state) => {
      state.selectMovieOrSeries = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state, { payload }) => {
      console.log("Pending");
    },

    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Sucessfully");
      return { ...state, movies: payload };
    },

    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },

    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("Fetched Sucessfully");
      return { ...state, series: payload };
    },

    [fetchAsyncMovieOrSeriesDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectMovieOrSeries: payload };
    },
  },
});

export const { removeSelectedMovieOrSeries } = movieSlice.actions;
export const getAllmovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getSelectedMovieOrSeries = (state) =>
  state.movies.selectMovieOrSeries;
export default movieSlice.reducer;
