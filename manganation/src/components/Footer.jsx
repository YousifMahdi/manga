import Logo from "../assets/Library.svg"
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row row__column">
                <Link to="/">
                    <figure className="footer__logo">
                        <img src={Logo} className="footer__logo--img" alt="" />
                    </figure>
                </Link>
                <div className="footer__list">
                    <a href="/" className="footer__link">Home</a>
                    <span className="footer__link no-cursor">About</span>
                    <a href="/Books" className="footer__link">Manga</a>
                    <Link to="/cart" className="footer__link">Cart</Link>
                </div>
                <div className="footer__copyright">
                    Copyright &copy; 2023 Manga Library
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer