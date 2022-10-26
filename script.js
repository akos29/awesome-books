const form = document.getElementById('form');
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
      console.log("Get Book",books);
    }
    return books;
  }

  static removeBook(id) {
    const books = Book.getBooks();
    books.forEach((book, index) => {
      if (book.id === parseInt(id, 10)) {
        books.splice(index, 1);
        return true;
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
    // Book.displayBooks();
    return false;
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
            const res=Book.removeBook(btn.id)
            console.log(res)
            console.log(btn.id)
            btn.parentElement.remove();
          if (res) {
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
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const msg = document.querySelector('.error-message');
  function clear() { msg.innerHTML = ''; }

  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const books=JSON.parse(localStorage.getItem('books')) || [];
  const id = books.length + 1;
  if (title.value === '' || author.value === '') {
    msg.classList.remove('success');
    msg.innerHTML = 'Please enter the book title and author';
    setTimeout(clear, 2000);
  } else {
    const b = new Book(id, title.value, author.value);
    Book.addBook(b);
    form.reset();
    msg.classList.add('success');
    msg.innerHTML = 'The book is added successfully';
    setTimeout(clear, 2000);
  }
});

Book.displayBooks();
console.log(booksList)
console.log(Book.books)