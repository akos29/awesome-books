const addBtn = document.getElementById('add');
// Declaring varibale for the books' container
const listContainer = document.querySelector('.list_container');

// Creating Array of objects(Book List)
let booksList = JSON.parse(localStorage.getItem('books')) || [];

// Function to delete book from the list
function deleteBook(id) {
  booksList = booksList.filter((item) => item.id !== parseInt(id, 10));
  localStorage.setItem('books', JSON.stringify(booksList));
}

// Function to display the added book
function displayBook(book) {
  const bookMarkup = `<div class="book_list">
        <span class="book_text">${book.title} by ${book.author} </span>
        <button class="remove" id=${book.id}>Remove</button>
        </div>`;
  listContainer.innerHTML += bookMarkup;
  const deleteBtn = document.querySelectorAll('.remove');
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      deleteBook(btn.id);
      btn.parentElement.remove();
    });
  });
}

// recursively call displayBook(book);
function displayBooks() {
  booksList.forEach((book) => {
    displayBook(book);
  });
}

// Function to add book to the list
addBtn.addEventListener('click', () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  if (title.value === '' || author.value === '') {
    window.alert('Please enter the book title and author');
  } else {
    const id = booksList.length + 1;
    const book = {
      id,
      title: title.value,
      author: author.value,
    };
    displayBook(book);
    booksList.push(book);
    localStorage.setItem('books', JSON.stringify(booksList));
  }
});

// Calling displayBooks() function on page load
window.addEventListener('load', displayBooks);
