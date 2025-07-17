import React from "react";

function Hero() {
  return (
    <div className="container text-center mb-5" style={{ marginTop: "7em" }}>
      <h2 className="text-muted" style={{ fontSize: "40px" }}>
        Zerodha Products
      </h2>
      <h3 className="mt-3 text-muted" style={{ fontSize: "20px" }}>
        Sleek, modern, and intuitive trading platforms
      </h3>
      <h5 className="mt-3 text-muted mb-5" style={{ fontSize: "15px" }}>
        Check out our{" "}
        <a href="" style={{ textDecoration: "none" }}>
          investment offerings{" "}
          <i class="fa fa-long-arrow-right" aria-hidden="true" />{" "}
        </a>
      </h5>
    </div>
  );
}

export default Hero;
