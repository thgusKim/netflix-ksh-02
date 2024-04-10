import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlider from "./components/PopularMovieSlider";
import TopRatedSlider from "./components/TopRatedMovieSlider";
import UpcomingSlider from "./components/UpcomingMovieSlider";

//1. 배너 => popular 영화를 들고와서 첫번째 아이템을 보여주자
//2. popular movie
//3. top rated movie
//4. upcoming movie
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlider />
      <TopRatedSlider />
      <UpcomingSlider />
    </div>
  );
};

export default Homepage;
