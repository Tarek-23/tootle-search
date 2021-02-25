import { Button } from "@material-ui/core";
import { ClearRounded, MicRounded, SearchRounded } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./Search.css";

function Search({ hideButtons: searchPage = false, initialValue }) {
  const [{ term }, dispatch] = useStateValue();

  const [query, setQuery] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    console.log("You searched ", query);

    if (query.current !== null) {
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: query,
      });
    }

    history.push("/search");
  };

  const onClear = () => {
    setQuery("");
  };

  return (
    <form className="search">
      <div className="search__input">
        {!searchPage && (
          <SearchRounded
            style={{
              color: "#9aa0a6",
              fontSize: "x-large",
              paddingBottom: "3px",
            }}
          />
        )}
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder={term}
        />

        {query && (
          <ClearRounded className="search__inputClear" onClick={onClear} />
        )}

        <div className="search__inputIcons">
          <MicRounded className="search__inputIcon" />
          {searchPage && <SearchRounded className="search__inputIcon" />}
        </div>
      </div>

      <div
        className={
          "search__buttons" + (searchPage ? " search__buttons--hidden" : "")
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
