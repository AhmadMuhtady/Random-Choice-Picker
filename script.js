const tagsEl = document.getElementById('tags');
const textArea = document.getElementById('text-area');
const addBtn = document.getElementById('add');
const ranBtn = document.getElementById('btn');
textArea.focus();

function createTags(input) {
	const tags = input
		.split(',')
		.filter((tag) => tag.trim() !== '')
		.map((tag) => tag.trim());

	tagsEl.innerHTML = '';

	tags.forEach((tag) => {
		const tagEl = document.createElement('span');
		tagEl.classList.add('tag');
		tagEl.innerHTML = tag;
		tagsEl.appendChild(tagEl);
	});
}

function randomSelect() {
	const times = 30;

	const interVal = setInterval(() => {
		const randomTag = pickRandomTag();
		highLightTag(randomTag);

		setTimeout(() => {
			unHighLightTag(randomTag);
		}, 100);
	}, 100);

	setTimeout(() => {
		clearInterval(interVal);

		setTimeout(() => {
			const randomTag = pickRandomTag();
			highLightTag(randomTag);
		}, 100);
	}, times * 100);
}

function pickRandomTag() {
	const tags = document.querySelectorAll('.tag');
	return tags[Math.floor(Math.random() * tags.length)];
}

function highLightTag(tag) {
	tag.classList.add('highlight');
}

function unHighLightTag(tag) {
	tag.classList.remove('highlight');
}

ranBtn.addEventListener('click', () => {
	setTimeout(() => {
		textArea.value = '';
	}, 10);

	randomSelect();
});
addBtn.addEventListener('click', (e) => {
	createTags(textArea.value);
});
