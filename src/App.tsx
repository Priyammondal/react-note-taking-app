import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NewNote from "./pages/NewNote";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import NoteList from "./pages/NoteList";
import NoteLayout from "./layouts/NoteLayout";
import Note from "./pages/Note";
import EditNote from "./pages/EditNote";
import About from "./pages/About";
import Footer from "./components/Footer";

export type Note = {
  id: string;
} & NoteData;

export type NoteData = {
  title: string;
  markDown: string;
  tags: Tag[];
};

type RawNote = {
  id: string;
} & RawNoteData;

type RawNoteData = {
  title: string;
  markDown: string;
  tagIds: string[];
};

export type Tag = {
  id: string;
  label: string;
};

const App = () => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "n") {
        navigate("/new");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]);

  const notesWithTags = useMemo(() => {
    return notes.map(note => {
      return { ...note, tags: tags.filter(tag => note?.tagIds?.includes(tag.id)) }
    })
  }, [notes, tags])

  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes(prev => {
      return [...prev, { ...data, id: uuidv4(), tagIds: tags.map(tag => tag.id) }]
    })
  }

  function onUpdateNote(id: string, { tags, ...data }: NoteData) {
    setNotes(prevNotes => {
      return prevNotes.map(note => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map(tag => tag.id) }
        }
        else {
          return note;
        }
      })
    })
  }

  function onDeleteNote(id: string) {
    setNotes(prevNotes => {
      return prevNotes.filter(note => note.id !== id)
    })
  }

  function addTag(tag: Tag) {
    setTags(prev => [...prev, tag])
  }

  function updateTag(id: string, label: string) {
    setTags(prevTags => {
      return prevTags.map(tag => {
        if (tag.id === id) {
          return { ...tag, label }
        } else {
          return tag;
        }
      })
    })
  }

  function deleteTag(id: string) {
    setTags(prevTags => {
      return prevTags.filter(tag => tag.id !== id)
    })
  }

  const showFooter =
    !isHomePage || (isHomePage && notesWithTags.length > 0);

  const showGithubButton =
    isHomePage && notesWithTags.length === 0;

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <Container className="my-4">
          <Routes>
            <Route path="/" element={<NoteList availableTags={tags} notes={notesWithTags} onUpdateTag={updateTag} onDeleteTag={deleteTag} />} />
            <Route path="/about" element={<About />} />

            <Route path="/new" element={<NewNote onSubmit={onCreateNote} onAddTag={addTag} availableTags={tags} />} />

            <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
              <Route index element={<Note onDelete={onDeleteNote} />} />
              <Route path="edit" element={<EditNote onSubmit={onUpdateNote} onAddTag={addTag} availableTags={tags} />} />
            </Route>
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Container>
      </main>


      {showGithubButton && <a
        href="https://github.com/Priyammondal/react-note-taking-app"
        target="_blank"
        rel="noopener noreferrer"
        className="github-icon btn position-fixed bottom-0 end-0 m-3 rounded-circle d-flex align-items-center justify-content-center"
      >
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-github-with-cat-logo-an-online-community-for-software-development-logo-color-tal-revivo.png"
          alt="GitHub"
        />
      </a>}

      {showFooter && <Footer />}

    </div>
  );
};

export default App;
