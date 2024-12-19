import React from 'react';

const OfferingsComponent = () => {
    const offerings = [
        "System Design",
        "Database Management",
        "Backend Development",
        "Frontend Development",
        "Test Coverage",
        "Deployment",
        "End-to-End Development",
      ];

  return (
    <section style={{ padding: "2rem" }}>
    <h2
      style={{
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "1.5rem",
      }}
    >
      What can I offer?
    </h2>
    <div className="work-cycle-container">
      {offerings.map((step, index) => (
        <div key={index} className="cycle-step" style={{backgroundColor: 'orange', justifyContent: 'center', verticalAlign: 'center'}}>
          <h3 style={{ fontSize: "1rem", fontWeight: "600" }}>{step}</h3>
        </div>
      ))}
    </div>
  </section>
  );
};

export default OfferingsComponent;
