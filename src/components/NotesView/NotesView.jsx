import { useEffect, useState } from "react"
import { SubmitButton, TextArea, TextField, Button } from "../Modules/Form/FormModules"
import { fetchNotes, postNote } from "../../services/notes"
import "./NotesView.scss"

export const NotesView = ({ }) => {
	const [notes, setNotes] = useState([])
	const [notesLoaded, setNotesLoaded] = useState(false)

	useEffect(() => {
		fetchNotes()
			.then(data => {
				setNotes(data);
			})
			.then(() => {
				setNotesLoaded(true)
			})
	}, [])

	function addNote(newNote) {
		const newNotesState = notes.concat(newNote)
		setNotes(newNotesState);
		postNote(newNote)
	}

	function deleteNote(index) {
		const newArray = notes.slice();
		newArray.splice(index, 1)
		setNotes(newArray)
	}

	return (
		<div className="NotesView">
			<NewNoteForm
				onSubmit={(newNote) => {
					addNote(newNote)
				}}
			/>
			<NoteCollection
				notes={notes}
				handleDelete={(id) => {
					deleteNote(id);
				}}
				isLoaded={notesLoaded}
			/>
		</div>
	)
}


const NewNoteForm = ({
	onSubmit = () => { }
}) => {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")

	return (
		<form className={`NewNoteForm`}
			onSubmit={(event) => {
				event.preventDefault()
				const newNote = {
					title: title,
					content: content,
					important: "false"
				}
				setTitle("")
				setContent("")

				onSubmit(newNote)
			}}
		>
			<TextField
				value={title}
				placeholder="Note Title"
				onValueChange={(value) => {
					setTitle(value)
				}}
			/>
			<TextArea
				value={content}
				placeholder="Note Text"
				onValueChange={(value) => {
					setContent(value)
				}}
			/>
			<SubmitButton
				validationFunction={
					() => {
						return title.length > 0 && content.length > 0
					}
				}
				text="Save Note"
			/>
		</form>
	)
}

export const NoteCollection = ({
	notes = [],
	handleDelete = (note) => { },
	isLoaded = false
}) => {

	const content = (
		<div className="NoteCollection">
			{notes.map((note, id) =>
				<Note
					key={id}
					title={note.title}
					content={note.content}
					handleDelete={() => {
						handleDelete(id)
					}}
				/>)
			}
		</div>
	)

	return (
		isLoaded ?
			content : <p>"Loading notes... (loading notes can take up to 50 seconds the first time because of Render's free tier). If after a minute it's still not working, please manually refresh!"</p>
	)
}

const Note = ({ title, content, handleDelete = () => { } }) => {
	return (
		<div
			className="Note"
		>
			<h2 className="NoteTitle">{title}</h2>
			<p className="NoteText">{content}</p>
			<Button
				text="x"
				handleClick={handleDelete}
			/>
		</div>
	)
}
