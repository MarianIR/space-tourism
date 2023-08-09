import technologyData from "./technologyData";
import { useState } from "react";

const Technology = () => {
  const [currentTechnology, setCurrentTechnology] = useState(0);

  const handleChangeTechnology = (index) => {
    setCurrentTechnology(index);
  };

  return (
    <section className="technology">
      <h2 className="technology-heading">
        <b className="number">03</b>
        SPACE LAUNCH 101
      </h2>
      <div className="technology-container">
        <article className="technology-article">
          <div className="choose-technology-box">
            {technologyData.map((data, index) => (
              <div
                className="choose-technology"
                key={index}
                onClick={() => handleChangeTechnology(index)}
              >
                <div className="tech">{data.techNumber}</div>
              </div>
            ))}
          </div>
          <div className="technology-text">
            <h5 className="secondary-heading">THE TERMINOLOGY...</h5>
            <h2 className="technology-name">
              {technologyData[currentTechnology].techType}
            </h2>
            <p className="technology-description">
              {technologyData[currentTechnology].techDescription}
            </p>
          </div>
        </article>
        <div className="illustrations-container">
          <img
            src={technologyData[currentTechnology].landscapeImg}
            alt="this is technology landscape illustration"
            className="landing-illustration"
          />
          <img
            src={technologyData[currentTechnology].portretImg}
            alt="this is technology portret illustration"
            className="portret-illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Technology;
