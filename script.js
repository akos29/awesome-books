const addBtn = document.getElementById('add');
// Declaring varibale for the books' container
const main = document.querySelector('main');

// Creating Array of objects(Book List)
let booksList = [
  {
    id: 1,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
  },

  {
    id: 2,
    title: 'The Animal farm',
    author: 'Paulo Jack',
  },
];

// Re-display the books list after deleted item
function refresh() {
  main.innerHTML = '';
  displayBooks();
}

// Remove a book with id from the page book list
function deleteBook(id) {
  booksList = booksList.filter((item) => item.id !== parseInt(id));
  refresh();
}

// Function to display the added book
function displayBook(book) {
  const bookMarkup = `<div class="book_list">
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button class="remove" id=${book.id}>Remove</button>
        <hr>`;
  main.innerHTML += bookMarkup;
  const deleteBtn = document.querySelectorAll('.remove');
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      deleteBook(btn.id);
    });
  });
}

// recursively call displayBook(book);
function displayBooks() {
  booksList.forEach((book) => {
    displayBook(book);
  });
}

// Add book to the list
function addBook() {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const id = booksList.length + 1;
  const book = {
    id,
    title: title.value,
    author: author.value,
  };
  displayBook(book);
  booksList.push(book);
}

// create book
addBtn.addEventListener('click', addBook);

window.addEventListener('load', displayBooks);
