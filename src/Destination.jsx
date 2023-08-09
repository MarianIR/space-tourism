import { useState } from "react";
import destinationData from "./destinationData"; // Make sure to import your CSS file.

const Destination = () => {
  const [currentDestination, setCurrentDestination] = useState(0);

  const handleChangePlanet = (index) => {
    setCurrentDestination(index);
  };

  return (
    <section className="destination-section">
      <h2 className="destination-heading">
        <b className="number">01</b>
        PICK YOUR DESTINATION
      </h2>
      <div className="content-container">
        <img
          src={destinationData[currentDestination].planetImage}
          alt="planet illustration"
          className="planet-img"
        />
        <article className="destination-article">
          <div className="planet-container">
            {destinationData.map((data, index) => (
              <div
                className="choose-planet"
                key={index}
                onClick={() => handleChangePlanet(index)}
              >
                <h5 className="planet">{data.name}</h5>
              </div>
            ))}
          </div>
          <h2 className="planet-name">
            {destinationData[currentDestination].planetTitle}
          </h2>
          <p className="paragraph-description">
            {destinationData[currentDestination].description}
          </p>
          <hr className="horizontal-line" />
          <div className="statistics">
            <div className="distance-box">
              <h5 className="distance-heading">AVG. DISTANCE</h5>
              <strong className="distance">
                {destinationData[currentDestination].distance}
              </strong>
            </div>
            <div className="travel-time">
              <h5 className="travel-heading">EST. TRAVEL TIME</h5>
              <strong className="travel">
                {destinationData[currentDestination].travelTime}
              </strong>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Destination;
