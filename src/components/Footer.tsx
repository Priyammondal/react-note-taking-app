import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer
            className="bg-light text-dark mt-auto py-3"
            style={{ borderTop: "1px solid #e5e5e5" }}
        >
            <Container>
                <Row className="align-items-center justify-content-between">
                    {/* Left: Copyright */}
                    <Col xs={12} md="auto" className="text-center text-md-start mb-2 mb-md-0">
                        <small>
                            &copy; {new Date().getFullYear()} Notoora. All rights reserved.
                        </small>
                    </Col>

                    {/* Center: Links */}
                    <Col xs={12} md="auto" className="d-flex justify-content-center flex-wrap gap-3 mb-2 mb-md-0">
                        <Link to="/" className="text-dark text-decoration-none fw-medium footer-link">
                            Home
                        </Link>
                        <Link to="/new" className="text-dark text-decoration-none fw-medium footer-link">
                            Create Note
                        </Link>
                        <Link to="/about" className="text-dark text-decoration-none fw-medium footer-link">
                            About
                        </Link>
                    </Col>

                    {/* Right: Social Icons */}
                    <Col xs={12} md="auto" className="d-flex justify-content-center justify-content-md-end gap-2">
                        <a
                            href="https://github.com/Priyammondal/react-note-taking-app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/priyam-mondal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </Col>
                </Row>
            </Container>

            {/* Inline CSS for hover effect */}
            <style>
                {`
          .footer-link {
            position: relative;
            transition: color 0.2s ease;
          }
          .footer-link::after {
            content: "";
            position: absolute;
            width: 0%;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #6366f1;
            transition: width 0.3s ease;
          }
          .footer-link:hover {
            color: #6366f1;
          }
          .footer-link:hover::after {
            width: 100%;
          }
        `}
            </style>
        </footer>
    );
};

export default Footer;
