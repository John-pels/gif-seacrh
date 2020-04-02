import React from "react";
import "./styles.scss";

const GifDetails = ({ gifTitle }) => (
  <section className="gif-details">
    <div className="container">
      <div className="row">
        <h1>{gifTitle}</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam
        repellendus quas, fugiat quaerat ratione quia adipisci doloribus. Soluta
        at quos recusandae odit aliquam dignissimos, corrupti numquam placeat
        totam quisquam!
      </div>
    </div>
  </section>
);

export default GifDetails;
