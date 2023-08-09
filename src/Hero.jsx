import { Link } from "react-router-dom"; // Import the Link component

const Hero = () => {
  return (
    <main className="hero">
      <article className="hero-article">
        <h2 className="second-heading">SO, YOU WANT TO TRAVEL TO</h2>
        <h1 className="main-heading">SPACE</h1>
        <p className="hero-paragraph">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </article>
      <button className="explore-btn">
        <Link to="destination" className="explore-link">
          EXPLORE
        </Link>
      </button>
    </main>
  );
};

export default Hero;
