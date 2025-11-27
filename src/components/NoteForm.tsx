import React, { useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import { type Tag, type NoteData } from "../App";
import { v4 as uuidv4 } from "uuid";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>;

const NoteForm = ({
  onSubmit,
  onAddTag,
  availableTags,
  title = "",
  markDown = "",
  tags = []
}: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markDown: markdownRef.current!.value,
      tags: selectedTags,
    });
    navigate("..");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        {/* Title & Tags */}
        <Row className="d-flex justify-content-center gap-3 mt-3 flex-column flex-md-row">
          <Col>
            <Form.Group controlId="title">
              <Form.Label className="fw-semibold">Title</Form.Label>
              <Form.Control
                ref={titleRef}
                required
                defaultValue={title}
                placeholder="Enter a descriptive title..."
                style={{ borderRadius: "12px", padding: "10px 14px" }}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="tags">
              <Form.Label className="fw-semibold">Tags</Form.Label>
              <CreatableSelect
                isMulti
                onCreateOption={(label) => {
                  const newTag = { id: uuidv4(), label };
                  onAddTag(newTag);
                  setSelectedTags((prev) => [...prev, newTag]);
                }}
                options={availableTags.map((tag) => ({
                  label: tag.label,
                  value: tag.id,
                }))}
                value={selectedTags.map((tag) => ({
                  label: tag.label,
                  value: tag.id,
                }))}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => ({
                      label: tag.label,
                      id: tag.value,
                    }))
                  );
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderRadius: "12px",
                    padding: "4px",
                  }),
                }}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Body */}
        <Form.Group controlId="markdown">
          <Form.Label className="fw-semibold">Note Body</Form.Label>
          <Form.Control
            ref={markdownRef}
            as="textarea"
            rows={10}
            required
            defaultValue={markDown}
            placeholder="Write your note content here..."
            style={{
              borderRadius: "14px",
              padding: "14px",
              resize: "vertical",
            }}
          />
        </Form.Group>

        {/* Buttons */}
        <Stack
          direction="horizontal"
          gap={2}
          className="justify-content-end mt-2"
        >
          <Button
            type="submit"
            variant="primary"
            className="px-4 py-2"
            style={{ borderRadius: "12px" }}
          >
            💾 Save Note
          </Button>

          <Link to="..">
            <Button
              type="button"
              variant="outline-secondary"
              className="px-4 py-2"
              style={{ borderRadius: "12px" }}
            >
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
};

export default NoteForm;
