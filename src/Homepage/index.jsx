import React, { Component } from "react";
import "./homepage.styles.scss";
import Spinner from "../component/Spinner";
import GifCard from "../component/GifCard";

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifsData: [],
      keywords: "",
      isLoading: false
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSearch = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const apiKey = "OYa73aJOBfbenMLiAav9ZXswodSdoTTW";
    const url = "https://api.giphy.com/v1/gifs/search?api_key=";

    fetch(
      `${url}${apiKey}&q=${this.state.keywords}&limit=30&offset=0&rating=G&lang=en`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(gifs => {
        this.setState({ gifsData: gifs.data });
        console.log(this.state.gifsData);
        this.setState({ isLoading: false });
      })
      .catch(error => {
        console.log(error);
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
              <form action="" className="search-form">
                <input
                  type="text"
                  name="keywords"
                  value={this.state.keywords}
                  onChange={this.handleChange}
                  className="search-input mb-3"
                  placeholder="Enter any keywords"
                  required
                />
                <button className="btn-search" onClick={this.handleSearch}>
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="row  mt-4 p-3">
            {this.state.isLoading ? <Spinner /> : null}

            {this.state.gifsData.map(val => (
              <div className="col-lg-3 col-sm-4" key={val.id}>
                <GifCard
                  gifImg={val.images.fixed_height_downsampled.url}
                  gifTitle={val.title}
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
