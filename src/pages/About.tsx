import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

export default function AboutPage() {
    return (
        <div style={{ position: "relative", overflow: "hidden" }}>
            {/* Background blobs */}
            <div
                style={{
                    position: "absolute",
                    top: "-70px",
                    left: "-70px",
                    width: "260px",
                    height: "260px",
                    background: "rgba(99, 102, 241, 0.15)",
                    borderRadius: "50%",
                    filter: "blur(55px)",
                    zIndex: "-1",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    bottom: "-70px",
                    right: "-70px",
                    width: "260px",
                    height: "260px",
                    background: "rgba(16, 185, 129, 0.15)",
                    borderRadius: "50%",
                    filter: "blur(55px)",
                    zIndex: "-1",
                }}
            />

            <Container className="py-5 mt-4">
                {/* Hero Section */}
                <Row className="align-items-center text-center text-md-start mb-5">
                    <Col md={6}>
                        <h1 className="fw-bold">
                            About <span style={{ color: "#6366F1" }}>Your Notes</span>
                        </h1>
                        <p className="text-muted mt-3" style={{ fontSize: "1.1rem" }}>
                            Your Notes is a simple, fast, and beautifully designed note-taking
                            application that helps you capture ideas, tasks, and thoughts —
                            all in one place.
                            Designed to be minimal, yet powerful enough for organization and productivity.
                        </p>

                        <Button
                            href="/"
                            variant="primary"
                            size="lg"
                            style={{ borderRadius: "12px" }}
                            className="mt-3"
                        >
                            🚀 Go Back Home
                        </Button>
                    </Col>

                    <Col md={6} className="text-center mt-5 mt-md-0">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/4697/4697260.png"
                            alt="About illustration"
                            fluid
                            style={{ width: "70%", maxWidth: "320px" }}
                        />
                    </Col>
                </Row>

                {/* Features Section */}
                <h2 className="fw-semibold text-center mt-5">✨ Key Features</h2>

                <Row className="mt-4 g-4">
                    <Col md={4}>
                        <Card className="h-100 shadow-sm border-0 p-3" style={{ borderRadius: "16px" }}>
                            <Card.Body>
                                <h5 className="fw-bold">📝 Create Notes Easily</h5>
                                <p className="text-muted small">
                                    Add new notes instantly with a clean editor designed for speed.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="h-100 shadow-sm border-0 p-3" style={{ borderRadius: "16px" }}>
                            <Card.Body>
                                <h5 className="fw-bold">🏷 Organize with Tags</h5>
                                <p className="text-muted small">
                                    Use tags to group your notes and find them faster.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="h-100 shadow-sm border-0 p-3" style={{ borderRadius: "16px" }}>
                            <Card.Body>
                                <h5 className="fw-bold">⚡ Fast Search</h5>
                                <p className="text-muted small">
                                    Quickly filter and search notes by title or tags.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* How It Works Section */}
                <h2 className="fw-semibold text-center mt-5">📘 How It Works?</h2>

                <Row className="mt-4 g-4">
                    <Col md={4}>
                        <Card className="border-0 shadow-sm p-3" style={{ borderRadius: "16px" }}>
                            <Card.Body className="text-center">
                                <h3>1️⃣</h3>
                                <h6 className="fw-bold">Create a Note</h6>
                                <p className="text-muted small">
                                    Enter your thoughts, tasks, ideas — anything.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="border-0 shadow-sm p-3" style={{ borderRadius: "16px" }}>
                            <Card.Body className="text-center">
                                <h3>2️⃣</h3>
                                <h6 className="fw-bold">Add Tags</h6>
                                <p className="text-muted small">Organize notes by categories.</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="border-0 shadow-sm p-3" style={{ borderRadius: "16px" }}>
                            <Card.Body className="text-center">
                                <h3>3️⃣</h3>
                                <h6 className="fw-bold">Search & View</h6>
                                <p className="text-muted small">Find your notes instantly.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
