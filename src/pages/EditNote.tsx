import NoteForm from '../components/NoteForm'
import type { NoteData, Tag } from '../App'
import { useNote } from '../layouts/NoteLayout';

type editNoteProps = {
    onSubmit: (id: string, data: NoteData) => void;
    onAddTag: (tag: Tag) => void;
    availableTags: Tag[]
}

const EditNote = ({ onSubmit, onAddTag, availableTags }: editNoteProps) => {
    const note = useNote();
    return (
        <div>
            <h1 className='mb-4'>Edit Note</h1>
            <NoteForm title={note.title} markDown={note.markDown} tags={note.tags} onSubmit={data => onSubmit(note.id, data)} onAddTag={onAddTag} availableTags={availableTags} />
        </div>
    )
}

export default EditNote