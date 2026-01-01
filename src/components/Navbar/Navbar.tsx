import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { GeneralButton } from "../buttons/GeneralButton";

export default function Navbar() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/mentors", label: "Find a Mentor" },
    { to: "/how-it-works", label: "How It Works" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <NavLink to="/" className="navbar__brand">
            <span className="navbar__logo">M</span>
            MentorMe.ai
          </NavLink>

          <div className="navbar__links">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "navbar__link navbar__link--active"
                    : "navbar__link"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="navbar__actions">
          <GeneralButton label="Login" />
          <GeneralButton label="Get Started" />
        </div>
      </div>
    </nav>
  );
}
