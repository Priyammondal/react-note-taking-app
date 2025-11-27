import { Button, Col, Form, Modal, Row, Stack } from "react-bootstrap";
import type { Tag } from "../App";
import styles from "../styles/EditTagsModal.module.css";

type EditTagsModalProps = {
    availableTags: Tag[];
    show: boolean;
    handleClose: () => void;
    onUpdateTag: (id: string, label: string) => void;
    onDeleteTag: (id: string) => void;
};

const EditTagsModal = ({
    availableTags,
    show,
    handleClose,
    onUpdateTag,
    onDeleteTag,
}: EditTagsModalProps) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            size="lg"
            className={styles.modalWrapper}
        >
            <Modal.Header closeButton>
                <Modal.Title className="fw-bold">Edit Tags</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {availableTags.length > 0 ? (
                    <Form>
                        <Stack gap={3}>
                            {availableTags.map((tag) => (
                                <Row key={tag.id} className="align-items-center">
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            value={tag.label}
                                            onChange={(e) => onUpdateTag(tag.id, e.target.value)}
                                            className={styles.tagInput}
                                        />
                                    </Col>
                                    <Col xs="auto">
                                        <Button
                                            variant="outline-danger"
                                            className={styles.deleteButton}
                                            onClick={() => onDeleteTag(tag.id)}
                                        >
                                            &times;
                                        </Button>
                                    </Col>
                                </Row>
                            ))}
                        </Stack>
                    </Form>
                ) : (
                    <div className="text-center py-5 text-muted">
                        <p className="mb-2" style={{ fontSize: "1rem" }}>
                            No tags available yet.
                        </p>
                        <p style={{ fontSize: "0.85rem" }}>
                            Add tags while creating notes to manage them easily.
                        </p>
                    </div>
                )}
            </Modal.Body>

        </Modal>
    );
};

export default EditTagsModal;
