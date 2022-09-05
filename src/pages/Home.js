import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";

import request from "../Request";


const Home = () => {
  return (
    <>
      <Main />
      <Row title='Up Coming' fetchUrl={request.requestUpcoming} />
      <Row title="Popular" fetchUrl={request.requestPopular} />
      <Row title="Trending" fetchUrl={request.requestTrending} />
      <Row title="Top Rated" fetchUrl={request.requestTopRated} />
      <Row title="Horror" fetchUrl={request.requestHorror} />

    </>
  );
};

export default Home;
