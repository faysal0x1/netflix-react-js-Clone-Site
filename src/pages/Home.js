import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";

import request from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Up Coming" fetchURl={request.requestUpcoming} />
      <Row title="Popular" fetchURl={request.requestPopular} />
      <Row title="Trending" fetchURl={request.requestTrending} />
      <Row title="Top Rated" fetchURl={request.requestTopRated} />
      <Row title="Horror" fetchURl={request.requestHorror} />
    </>
  );
};

export default Home;
