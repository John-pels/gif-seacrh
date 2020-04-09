import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { API_KEY, URL } from "../../config.js";
import "./homepage.styles.scss";
import Spinner from "../../component/Spinner";
import GifCard from "../../component/GifCard";
import GifDetails from "../Details/index.jsx";

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifsData: [],
      keywords: "",
      isLoading: false,
      errorMessage: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { keywords } = this.state;

    event.preventDefault();
    keywords === ""
      ? this.setState({ errorMessage: "Enter a keyword" })
      : this.setState({ isLoading: true, errorMessage: "" });

    fetch(`${URL}${API_KEY}&q=${keywords}&limit=30&offset=0&rating=G&lang=en`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((gifs) => {
        this.setState({ gifsData: gifs.data });
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMessage: "Something went wrong, Please try again.",
          isLoading: false,
        });
      });
    this.setState({ keywords: "" });
  };

  render() {
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
              <form
                action=""
                className="search-form"
                onSubmit={this.handleSubmit}
              >
                <span className="error-message text-center">
                  {this.state.errorMessage}
                </span>
                <input
                  type="text"
                  name="keywords"
                  value={this.state.keywords}
                  onChange={this.handleChange}
                  className="search-input mb-3"
                  placeholder="Enter any keywords"
                  required
                />
                <button
                  className="btn-search"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="row  mt-5 p-3">
            {this.state.isLoading ? <Spinner /> : null}

            {this.state.gifsData.map((val) => (
              <div className="col-lg-3 col-sm-4" key={val.id}>
                <Link
                  to={{
                    pathname: `gifdetails/${val.id}`,
                    state: val,
                  }}
                >
                  <GifCard gifImg={val.images.fixed_height_downsampled.url} />
                </Link>
                <Route
                  path={`${this.props.match.path}/:id`}
                  component={GifDetails}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default Homepage;
