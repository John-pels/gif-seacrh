import React, { Component } from "react";
import "./homepage.styles.scss";

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSearch = event => {
    event.preventDefault();
    console.log(this.state.keywords);
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
                />
                <button className="btn-search" onClick={this.handleSearch}>
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="row  mt-4 p-3">
            <div className="col-lg-3 col-sm-4">
              <div className="gif-card"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Homepage;
