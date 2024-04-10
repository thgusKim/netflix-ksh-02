import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import MoviePage from "./pages/MoviePage/MoviePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

//홈페이지 /
//영화 전체 페이지(서치) /movies
//영화 디테일 페이지 /movies/:id
//추천 영화 /movies/:id/recommandation
//리뷰 /movies/:id/reviews
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="movies">
            <Route index element={<MoviePage />}></Route>
            <Route path=":id" element={<MovieDetailPage />}></Route>
          </Route>
        </Route>

        <Route path="*" elemen={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;