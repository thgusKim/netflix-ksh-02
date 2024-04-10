import React from "react";
import { Alert } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import "../../../common/MovieSlider/MovieSlider.style.css";
import { responsive } from "../../../constant/responsive";
import { useUpcomingMoviesQuery } from "../../../hooks/useUpcomingMovies";

const UpcomingSlider = ({ title, movies }) => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title="Upcoming Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcomingSlider;
