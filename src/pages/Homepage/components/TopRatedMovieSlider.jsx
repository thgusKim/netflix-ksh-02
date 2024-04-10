import React from "react";
import { Alert } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import "../../../common/MovieSlider/MovieSlider.style.css";
import { responsive } from "../../../constant/responsive";
import { useTopRatedMoviesQuery } from "../../../hooks/useTopRatedMovies";

const TopRatedSlider = ({ title, movies }) => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title="Top Rated Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default TopRatedSlider;
