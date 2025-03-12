const URL = 'https://intro-node-ojze.onrender.com/api/notes';

export async function fetchNotes() {

	const res = await fetch(URL);
	const data = await res.json();

	return data;
}

export function postNote(newNote) {
	console.log(JSON.stringify(newNote));

	fetch(URL,
		{
			method: "POST",
			body: JSON.stringify(newNote),
			headers: {
				"Content-type": "application/json"
			}
		}
	)
		.then(response => response.json())
		.then(json => console.log(json))
		.catch(err => {
			alert("Error fetching notes. Please refresh the page manually!")
			console.error(err);
		})
}