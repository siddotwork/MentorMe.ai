import { Link } from "react-router-dom";
import "./NotFound.scss";
import NotFoundVector from "../../assets/NotFound.png";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <div className="not-found__image">
          <img src={NotFoundVector} alt="Page not found" />
        </div>
        <h1 className="not-found__title">404</h1>
        <p className="not-found__message">
          The page you are trying to access does not exist.
        </p>
        <Link to="/" className="not-found__action">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
