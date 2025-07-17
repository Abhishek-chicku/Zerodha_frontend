import React from "react";

function Hero() {
  return (
    <section className="Container-fluid" id="supportHero">
      <div
        className="p-5"
        id="supportWrap"
        style={{ marginLeft: "3em", marginRight: "13em" }}
      >
        <h5 style={{ marginLeft: "5.5em" }}>Support Portal</h5>
        <a href="" style={{ color: "white" }}>
          Track tickets
        </a>
      </div>
      <div className="row p-5" style={{ marginLeft: "5.5em" }}>
        <div className="col-6 p-5">
          <h1 className="fs-4 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg: How do i activate F&O,why is my order getting rejected..." />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-4">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting – April 2025</a>
            </li>
            <li>
              <a href="">Rights Entitlements listing in April 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
