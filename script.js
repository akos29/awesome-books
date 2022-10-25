const addBtn = document.getElementById('form');
// const addBtn = document.getElementById('add');
// Declaring varibale for the books' container
const listContainer = document.querySelector('.list_container');
const booksList = JSON.parse(localStorage.getItem('books')) || [];
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    // localStorage.setItem('books', JSON.stringify(booksList));
  }

  static addBook(book) {
    const books = Book.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static removeBook(id) {
    const books = Book.getBooks();
    books.forEach((book, index) => {
      if (book.id === parseInt(id, 10)) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }

  static displayBooks() {
    const books = Book.getBooks();

    books.forEach((book) => {
      const bookMarkup = `<div class="book_list">
        <span class="book_text">${book.title} by ${book.author} </span>
        <button class="remove" id=${book.id}>Remove</button>
        </div>`;
      listContainer.innerHTML += bookMarkup;
      const deleteBtn = document.querySelectorAll('.remove');
      deleteBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
          if (Book.removeBook(btn.id)) {
            btn.parentElement.remove();
          } else {
            btn.classList.add('disabled');
          }
        });
      });
    });
  }
}

// Function to add book to the list
addBtn.addEventListener('submit', async (e) => {
  e.preventDefault();

  const msg = document.querySelector('.error-message');
  function clear() { msg.innerHTML = ''; }

  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const id = booksList.length + 1;
  if (title.value === '' || author.value === '') {
    msg.innerHTML = 'Please enter the book title and author';
    setTimeout(clear, 2000);
  } else {
    const b = new Book(id, title.value, author.value);
    Book.addBook(b);
  }
});

Book.displayBooks();
