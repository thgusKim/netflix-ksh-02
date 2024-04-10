import React from "react";
import { Alert } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import "../../../common/MovieSlider/MovieSlider.style.css";
import { responsive } from "../../../constant/responsive";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovies";

const PopularMovieSlider = ({ title, movies }) => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title="Popualr Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default PopularMovieSlider;