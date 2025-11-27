import NoteForm from "../components/NoteForm";
import type { NoteData, Tag } from "../App";
import { useNote } from "../layouts/NoteLayout";
import { Card, Container } from "react-bootstrap";

type EditNoteProps = {
    onSubmit: (id: string, data: NoteData) => void;
    onAddTag: (tag: Tag) => void;
    availableTags: Tag[];
};

const EditNote = ({ onSubmit, onAddTag, availableTags }: EditNoteProps) => {
    const note = useNote();

    return (
        <Container className="py-4">
            <Card className="shadow-sm p-4">
                <h1 className='mb-4 fw-bold text-center'>
                    📝 Edit Note
                </h1>

                <NoteForm
                    title={note.title}
                    markDown={note.markDown}
                    tags={note.tags}
                    onSubmit={(data) => onSubmit(note.id, data)}
                    onAddTag={onAddTag}
                    availableTags={availableTags}
                />
            </Card>
        </Container>
    );
};

export default EditNote;
