import { Avatar } from "@material-ui/core";
import { Apps } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Homepage</h1>

      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>

        <div className="home__headerRight">
          {/* Link */}
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          {/* Icon */}
          <Apps />
          {/* Avatar */}
          <Avatar />
        </div>
      </div>

      <div className="home__body"></div>
    </div>
  );
}

export default Home;
