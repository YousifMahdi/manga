import { Link } from "react-router-dom";
function Explore() {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2 className="section__title">
            Explore more <span className="purple">Manga</span>
          </h2>
          <Link to = "/Books">
            <button className="btn">Explore Manga</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Explore;