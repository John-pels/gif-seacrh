import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const GifDetails = ({ location }) => {
  return (
    <section className="gif-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4 mt-5 col-sm-12">
            <div className="details-card">
              <h1 className="h1-text text-center">Gif Details</h1>

              <div className="gif">
                <img
                  src={location.state.images.fixed_height_downsampled.url}
                  alt="gif"
                  className="giphy"
                />
              </div>
              <div className="details mt-4">
                <span>Gif Name:</span>
                <span className="title ml-3">{location.state.title}</span>
              </div>
              <div className="details mt-2 mb-3">
                <span>Gif Type:</span>
                <span className="title ml-3">{location.state.type}</span>
              </div>
              <a
                href={location.state.images.fixed_height_downsampled.url}
                target="_blank"
                rel="noopener noreferrer"
                className="download-link"
              >
                Download
              </a>
              <Link to="/" className="home">
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GifDetails;
