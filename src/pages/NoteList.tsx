import React, { useMemo, useState } from 'react'
import { Button, Col, Form, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactSelect from "react-select"
import type { Tag } from '../App'
import NoteCard, { type SimplifiedNote } from '../components/NoteCard'
import EditTagsModal from '../components/EditTagsModal'

type NoteListProps = {
    availableTags: Tag[]
    notes: SimplifiedNote[]
    onUpdateTag: (id: string, label: string) => void
    onDeleteTag: (id: string) => void
}

const NoteList = ({ availableTags, notes, onUpdateTag, onDeleteTag }: NoteListProps) => {
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const [title, setTitle] = useState<string>("");
    const [editTagsModalIsOpen, setEditTagsModalIsOpen] = useState(false)

    const filteredNotes = useMemo(() => {
        return notes.filter(note => {
            const titleMatch = title === "" || note.title.toLowerCase().includes(title.toLowerCase());
            const tagsMatch = selectedTags.length === 0 || selectedTags.every(tag => note.tags.some(noteTag => noteTag.id === tag.id))

            return titleMatch && tagsMatch
        })
    }, [title, selectedTags, notes])

    return (
        <>
            <Row className='align-items-center mb-4'>
                <Col><h1>Notes</h1></Col>
                <Col xs="auto">
                    <Stack gap={2} direction='horizontal'>
                        <Link to="/new">
                            <Button variant='primary'>Create</Button>
                        </Link>
                        <Button onClick={() => setEditTagsModalIsOpen(true)} variant='outline-secondary'>Edit Tags</Button>
                    </Stack>
                </Col>
            </Row>
            <Form>
                <Row className="mb-4">
                    <Col>
                        <Form.Group controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type='text' value={title} onChange={e => setTitle(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="tags">
                            <Form.Label>Tags</Form.Label>
                            <ReactSelect
                                isMulti
                                options={availableTags.map(tag => {
                                    return { label: tag.label, value: tag.id }
                                })}
                                value={selectedTags.map((tag) => {
                                    return { label: tag.label, value: tag.id };
                                })}
                                onChange={(tags) => {
                                    setSelectedTags(
                                        tags.map((tag) => {
                                            return { label: tag.label, id: tag.value };
                                        })
                                    );
                                }}
                            />
                        </Form.Group></Col>
                </Row>
            </Form>
            <Row className='g-3' xs={1} sm={2} lg={3} xl={4}>
                {
                    filteredNotes.length > 0 ?
                        filteredNotes.map(note => <Col key={note.id}>
                            <NoteCard id={note.id} title={note.title} tags={note.tags} />
                        </Col>) : <p className='text-center w-100'>No Note Available! Create one</p>
                }
            </Row>
            <EditTagsModal availableTags={availableTags} show={editTagsModalIsOpen} handleClose={() => setEditTagsModalIsOpen(false)} onUpdateTag={onUpdateTag} onDeleteTag={onDeleteTag} />
        </>
    )
}

export default NoteList