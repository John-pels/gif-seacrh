import React from "react";
import "./index.scss";

const GifCard = ({ gifImg }) => (
  <div className="gif-card mb-3">
    <div className="gif-image">
      <img src={gifImg} alt="gif-img" className="gif-img img-responsive" />
    </div>
  </div>
);
export default GifCard;
