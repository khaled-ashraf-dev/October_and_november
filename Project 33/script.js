const markdownDemoText = `# Headers
## This is a Level 2 Header
### This is a Level 3 Header

**Emphasis**:
*This text is italic* and **this text is bold**.

**Lists**:
- Item 1
- Item 2
- Item 3

**Links**:
You can create [hyperlinks](https://www.example.com) in Markdown.

**Code**:
To display code, you can use backticks like \`code\` or create code blocks:

\`\`\`python
def hello_world():
    print("Hello, World!")
\`\`\`
`

const addBtn = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))
if (notes) {
    notes.forEach(note => {
        addNote(note)
    })
}


addBtn.addEventListener('click', () => {
    addNote(markdownDemoText)
})

function addNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
    <div class="tools">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ''}"></textarea>
    `

    const deleteBtn = note.querySelector('.delete')
    const editBtn = note.querySelector('.edit')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text 
    main.innerHTML = marked(text)

    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLocalStorage();
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target
        main.innerHTML = marked(value)

        updateLocalStorage()
    })

    document.body.appendChild(note)
}

function updateLocalStorage() {
    const notesText = document.querySelectorAll('textarea')
    const notes = []

    notesText.forEach(note => notes.push(note.value))
    localStorage.setItem('notes', JSON.stringify(notes))
}