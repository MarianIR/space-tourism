import { useState } from "react";
import crewData from "./crewData";
const Crew = () => {
  const [currentMember, setCurrentMember] = useState(0);
  const handleChangeMember = (index) => {
    setCurrentMember(index);
  };
  return (
    <section className="crew">
      <h2 className="crew-heading">
        <b className="number">02</b>
        MEET YOUR CREW
      </h2>
      <div className="crew-container">
        <article className="crew-article">
          <div className="crew-member-info">
            <h3 className="crew-member-position">
              {crewData[currentMember].role}
            </h3>
            <h3 className="crew-member-name">{crewData[currentMember].name}</h3>
            <p className="crew-member-description">
              {crewData[currentMember].personDescription}
            </p>
          </div>
          <div className="choose-member-box">
            {crewData.map((data, index) => (
              <div
                className="choose-crew-member"
                key={index}
                onClick={() => handleChangeMember(index)}
              >
                <div className="crew-member">{data.radioButton}</div>
              </div>
            ))}
          </div>
        </article>
        <hr className="horizontal-line" />
        <img
          src={crewData[currentMember].portret}
          alt="portret"
          className="portret"
        />
      </div>
    </section>
  );
};
export default Crew;
