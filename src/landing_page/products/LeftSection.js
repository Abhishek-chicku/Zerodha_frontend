import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container border-top mt-3">
      <div
        className="row"
        style={{ marginTop: "7em", marginLeft: "4em", width: "80" }}
      >
        <div className="col-6 p-5">
          <img src={imageUrl} />
        </div>
        <div
          className="col-6 mt-3 text-muted"
          style={{ fontSize: "17px", padding: "85px" }}
        >
          <h1 className="mb-5">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>Try demo</a>
            <a href={learnMore} style={{ marginLeft: "100px" }}>
              Learn more
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "20px" }}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
