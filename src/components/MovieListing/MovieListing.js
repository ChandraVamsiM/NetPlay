import React from "react";
import "./MovieListing.scss";
import { useSelector } from "react-redux";
import { getAllmovies, getAllSeries } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllmovies);
  const series = useSelector(getAllSeries);
  let renderMovies,
    renderSeries = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search?.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderSeries =
    series.Response === "True" ? (
      series.Search?.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="series-error">
        <h3>{series.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="series-list">
        <h2>Series</h2>
        <div className="movie-container">{renderSeries}</div>
      </div>
    </div>
  );
};

export default MovieListing;
