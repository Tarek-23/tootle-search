import { Button } from "@material-ui/core";
import { MicRounded, SearchRounded } from "@material-ui/icons";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./Search.css";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const inputRef = useRef("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    console.log("You searched ", inputRef.current);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: inputRef.current,
    });

    history.push("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchRounded className="search__inputIcon" />
        <input
          ref={inputRef}
          onChange={(e) => (inputRef.current = e.target.value)}
        />
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
