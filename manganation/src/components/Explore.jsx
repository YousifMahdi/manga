import { Link } from "react-router-dom";
function Explore() {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2 className="section__title">
            Explore more <span className="purple">Manga</span>
          </h2>
          <a href = "/Books">
            <button className="btn">Explore Manga</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Explore;