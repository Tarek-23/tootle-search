import React, { useEffect } from "react";
import "./Home.css";

import Search from "../components/Search.js";

import { Avatar } from "@material-ui/core";
import { Apps } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title = "Google";
  }, []);

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft"></div>

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

      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="logo"
        />

        <div className="home__inputContainer">
          {/* Search */}
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
