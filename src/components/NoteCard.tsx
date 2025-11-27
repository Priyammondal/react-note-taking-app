import type { Tag } from "../App";
import { Badge, Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/NoteCard.module.css";

export type SimplifiedNote = {
    id: string;
    title: string;
    tags: Tag[];
};

const NoteCard = ({ id, title, tags }: SimplifiedNote) => {
    return (
        <Card
            as={Link}
            to={`/${id}`}
            className={`text-reset text-decoration-none ${styles.card}`}
            style={{
                borderRadius: "14px",
                border: "1px solid #ececec",
                padding: "1rem",
                transition: "all 0.2s ease",
                backgroundColor: "white",
            }}
        >
            <h5
                className="fw-semibold mb-3"
                style={{
                    fontSize: "1.05rem",
                    color: "#333",
                }}
            >
                {title}
            </h5>

            {tags.length > 0 && (
                <Stack
                    gap={2}
                    direction="horizontal"
                    className="flex-wrap"
                    style={{ rowGap: "6px" }}
                >
                    {tags.map((tag) => (
                        <Badge
                            key={tag.id}
                            bg="primary"
                            pill
                            className="px-3 py-2 fw-medium shadow-sm"
                            style={{
                                borderRadius: "16px",
                                cursor: "default",
                                userSelect: "none",
                                transition: "all 0.2s ease",
                            }}
                        >
                            {tag.label}
                        </Badge>

                    ))}
                </Stack>
            )}
        </Card>
    );
};

export default NoteCard;
