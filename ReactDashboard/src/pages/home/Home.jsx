import React from "react";
import "./home.css";
import Info from "../../components/info/Info.jsx";
import Chart from "../../components/charts/Chart.jsx";
import { data } from "../../data.js";
import Smallwidgets from "../../components/smallwidgets/Smallwidgets.jsx";
import Largewidgets from "../../components/largewidgets/Largewidgets.jsx";
const Home = () => {
  return (
    <div className="homecontainer">
      <Info />
      <Chart data={data} title="User Analytics" dataKey="Active" />
      <div className="homewidgets">
        <Smallwidgets />
        <Largewidgets />
      </div>
    </div>
  );
};

export default Home;
