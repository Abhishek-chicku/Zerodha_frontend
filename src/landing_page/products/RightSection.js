import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-6"
          style={{ marginTop: "6em", marginBottom: "5em", padding: "7em" }}
        >
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>Learn more</a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageUrl} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
