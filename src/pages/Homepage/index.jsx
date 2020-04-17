import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import { API_KEY, URL, RATING, LANG, OFFSET, LIMIT } from "../../config.js";
import "./homepage.styles.scss";
import Spinner from "../../component/Spinner";
import GifCard from "../../component/GifCard";
import GifDetails from "../Details/index.jsx";

const Homepage = (props) => {
  const [gifsData, setGifsData] = useState([]);
  const [keywords, setKeywords] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setKeywords(value);
  };
  const regexCheck = /\s./g.test(keywords);

  const handleSubmit = (event) => {
    event.preventDefault();
    regexCheck || keywords === ""
      ? setErrorMessage("Enter a keyword or Figure")
      : setIsLoading(true) && setErrorMessage("");

    fetch(
      `${URL}${API_KEY}&q=${keywords}&${LIMIT}&${OFFSET}&${RATING}&${LANG}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((gifs) => {
        setGifsData(gifs.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Something went wrong, Please try again.");
        setIsLoading(false);
      });
    setKeywords("");
  };

  return (
    <main className="homepage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <h1 className="text-center p-5">Giphy Search Engine</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12 offset-lg-3 justify-content-center">
            <form action="" className="search-form" onSubmit={handleSubmit}>
              <span className="error-message text-center">{errorMessage}</span>
              <input
                type="text"
                name="keywords"
                value={keywords}
                onChange={handleChange}
                className="search-input mb-3"
                placeholder="Enter any keywords"
                required
              />
              <button
                className="btn-search"
                type="submit"
                onClick={handleSubmit}
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="row  mt-5 p-3">
          {isLoading && <Spinner />}

          {gifsData.map((gif) => (
            <div className="col-lg-3 col-sm-4" key={gif.id}>
              <Link
                to={{
                  pathname: `gifdetails/${gif.id}`,
                  state: gif,
                }}
              >
                <GifCard gifImg={gif.images.fixed_height_downsampled.url} />
              </Link>
              <Route path={`${props.match.path}/:id`} component={GifDetails} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Homepage;
