const tagsEl = document.getElementById('tags');
const textArea = document.getElementById('text-area');
textArea.focus();

textArea.addEventListener('keyup', (e) => {
	createTags(e.target.value);
});

function createTags(input) {
	console.log(input);
}
