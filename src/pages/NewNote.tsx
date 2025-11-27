import NoteForm from '../components/NoteForm'
import type { NoteData, Tag } from '../App'
import { Container, Card } from "react-bootstrap";

type newNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[]
}

const NewNote = ({ onSubmit, onAddTag, availableTags }: newNoteProps) => {
  return (
    <Container className="py-4">
      <Card className="shadow-sm p-4">
        <h1 className='mb-4 fw-bold text-center'>
          ✨ Create a New Note
        </h1>
        <NoteForm
          onSubmit={onSubmit}
          onAddTag={onAddTag}
          availableTags={availableTags}
        />
      </Card>
    </Container>
  )
}

export default NewNote
