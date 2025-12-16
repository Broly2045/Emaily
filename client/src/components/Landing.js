import React from "react";

const Landing = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>Emaily 🚀</h1>

      <p style={{ fontSize: "1.3rem", color: "#555", marginBottom: "30px" }}>
        Collect powerful feedback from your users. <br />
        Improve faster. Build smarter.
      </p>

      <div style={{ marginBottom: "40px", color: "#777" }}>
        <p>✔ Send automated surveys</p>
        <p>✔ Understand customer satisfaction</p>
        <p>✔ Make data-driven decisions</p>
      </div>
    </div>
  );
};

export default Landing;
