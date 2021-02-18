import { Button } from "@material-ui/core";
import { MicRounded, SearchRounded } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Search.css";

function Search({ hideButtons }) {
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    console.log("You searched ", input);

    history.push("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchRounded className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicRounded className="search__inputIcon" />
      </div>

      <div
        className={
          "search__buttons" + (hideButtons ? " search__buttons--hidden" : "")
        }
      >
        <Button type="submit" variant="outlined" onClick={search}>
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
}

export default Search;
