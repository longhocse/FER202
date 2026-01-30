import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function AppNavbar() {
  const location = useLocation();

  const links = [
    { path: "/ex1", label: "Exercise 1" },
    { path: "/ex2", label: "Exercise 2" },
    { path: "/ex3", label: "Exercise 3" },
    { path: "/ex4", label: "Exercise 4" },
  ];

  return (
    <>
      <style>{`
        .vip-navbar {
          backdrop-filter: blur(8px);
          background: linear-gradient(90deg, #141e30, #243b55) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .brand-glow {
          font-weight: bold;
          letter-spacing: 1px;
          transition: 0.3s;
        }

        .brand-glow:hover {
          text-shadow: 0 0 8px #00d4ff, 0 0 16px #00d4ff;
        }

        .nav-animated {
          position: relative;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .nav-animated:hover {
          transform: scale(1.15);
          color: #00d4ff !important;
        }

        .nav-animated::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 0%;
          height: 2px;
          background: #00d4ff;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-animated:hover::after {
          width: 100%;
        }

        .active-link {
          color: #00d4ff !important;
        }

        .active-link::after {
          width: 100%;
        }
      `}</style>

      <Navbar bg="dark" variant="dark" expand="lg" className="vip-navbar">
        <Container>
          <Navbar.Brand className="brand-glow">React Exercises</Navbar.Brand>

          <Nav className="me-auto">
            {links.map((item) => (
              <Nav.Link
                key={item.path}
                as={Link}
                to={item.path}
                className={`nav-animated ${
                  location.pathname === item.path ? "active-link" : ""
                }`}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;
