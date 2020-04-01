import React from "react";
import "./index.scss";

const GifCard = ({ gifImg, gifTitle }) => (
  <div className="gif-card mb-3">
    <div className="gif-image">
      <img src={gifImg} alt="gif-img" className="gif-img img-responsive" />
    </div>
    <p className="gif-title p-3 text-center">{gifTitle}</p>
  </div>
);
export default GifCard;
