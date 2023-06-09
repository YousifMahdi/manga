import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Manga Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              title="Easy and quick"
              description="Get access to the manga you purchased online instantly."
              icon={<FontAwesomeIcon icon="bolt" />}
            />
            <Highlight
              title="10,000+ Books"
              description="Library has manga in all your favorite categories."
              icon={<FontAwesomeIcon icon="book-open" />}
            />
            <Highlight
              title="Easy and quick"
              description="Get access to the manga you purchased online instantly."
              icon={<FontAwesomeIcon icon="tags" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;