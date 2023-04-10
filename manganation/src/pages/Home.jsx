import Discounted from "../components/Discounted";
import Explore from "../components/Explore";
import Featured from "../components/featured";
import Highlights from "../components/highlights";
import Landing from "../components/Landing";

import React from "react";

function Home() {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
}

export default Home;