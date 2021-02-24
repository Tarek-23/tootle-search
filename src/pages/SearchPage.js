import useGoogleSearch from "../useGoogleSearch";
import {
  actingResponse,
  angerManagementResponse,
  gymResponse,
} from "../response";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import {
  DescriptionOutlined,
  ImageOutlined,
  LocalOfferOutlined,
  MoreVert,
  RoomOutlined,
  SearchRounded,
} from "@material-ui/icons";
import { useEffect } from "react";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  // const { data } = useGoogleSearch(term);

  // fake

  var data = {};
  if (term === null || term[0] === "و") data = actingResponse;
  else if (term[0] === " ") data = gymResponse;
  else data = angerManagementResponse;

  useEffect(() => {
    document.title = term || "Google";
  }, [term]);
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="google logo"
            className="searchPage__logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsL">
              <div className="searchPage__option searchPage__option--active">
                <SearchRounded />
                <Link to="/all">All</Link>
              </div>

              <div className="searchPage__option">
                <DescriptionOutlined />
                <Link to="/news">News</Link>
              </div>

              <div className="searchPage__option">
                <ImageOutlined />
                <Link to="/images">Images</Link>
              </div>

              <div className="searchPage__option">
                <LocalOfferOutlined />
                <Link to="/shopping">Shopping</Link>
              </div>

              <div className="searchPage__option">
                <RoomOutlined />
                <Link to="/Maps">Maps</Link>
              </div>

              <div className="searchPage__option">
                <MoreVert />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsR">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* temp */}
      {true && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds)
          </p>

          {data === actingResponse && (
            <div className="searchPage__result">
              <a href="/ahmed_roushdy.html" className="searchPage__resultLink">
                www.facebook.com &#8250; Acting School
              </a>
              <a
                href="/ahmed_roushdy.html"
                // target="_blank"
                className="searchPage__resultTitle"
              >
                <h2>أحمد رشدي - Home | Facebook</h2>
              </a>
              <p className="searchPage__resultSnippet">
                أحمد رشدي ممثل ومخرج مصري خريج المعهد العالي للفنون المسرحية
                بالقاهرة، أخرج العديد من المسرحيات التي عرضت على خشبات مسارح
                القاهرة والإسكندرية المرموقة منها "فناء المدرسة"، "عدت إليك"، و
                "مصير الأربعين" ويعمل الآن كمدرب للمواهب الفنية
              </p>
            </div>
          )}

          {data === angerManagementResponse && (
            <div className="searchPage__result">
              <a
                href="https://www.thepeacefuldragon.com/can-martial-arts-help-with-anger-management-and-aggression-issues/"
                className="searchPage__resultLink"
              >
                thepeacefuldragon.com &#8250; Martial Arts School
              </a>
              <a
                href="https://www.thepeacefuldragon.com/can-martial-arts-help-with-anger-management-and-aggression-issues/"
                // target="_blank"
                className="searchPage__resultTitle"
              >
                <h2>Can Martial Arts Help with Anger Management?</h2>
              </a>
              <p className="searchPage__resultSnippet">
                Mar 6, 2018 — Learning how to control anger before it turns into
                outward rage, is vital to living ... Activities such as
                perfecting your martial arts stances
              </p>
            </div>
          )}

          {data === gymResponse && (
            <div className="searchPage__result">
              <a href="/marsgym.html" className="searchPage__resultLink">
                facebook.com &#8250; Local Gym
              </a>
              <a
                href="/marsgym.html"
                // target="_blank"
                className="searchPage__resultTitle"
              >
                <h2>MARS GYM | Facebook</h2>
              </a>
              <p className="searchPage__resultSnippet">
                99,841 people like this - We strive to make you the best athlete
                you can be.
              </p>
            </div>
          )}

          {data?.items.map((item) => (
            <div key={item.cacheId} className="searchPage__result">
              <a
                // target="_blank"
                href={item.link}
                className="searchPage__resultLink"
              >
                {item.displayLink}
              </a>
              <a
                // target="_blank"
                href={item.link}
                className="searchPage__resultTitle"
              >
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
