import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      {/* LOGO */}
      <Link className="navbar-brand fw-bold" to="/">
        Pizza House
      </Link>

      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/about"
            >
              About Us
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <form className="d-flex">
          <input className="form-control me-2" placeholder="Search" />
          <button className="btn btn-danger" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
