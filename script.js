const form = document.getElementById('form');
// Declaring varibale for the books' container
const listContainer = document.querySelector('.list_container');
const bookListContainer = document.querySelector('.list_wrapper');
const addBookContainer = document.querySelector('.add_book');
const contactContainer = document.querySelector('.contact');
const linkItem = document.querySelectorAll('.nav_links');
const date = document.getElementById('date');

const today =new Date();
console.log(today.toLocaleTimeString())

date.innerHTML=today.toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
}) + " " + today.toLocaleTimeString();
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
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
    let flag = false;
    books.forEach((book, index) => {
      if (book.id === parseInt(id, 10)) {
        books.splice(index, 1);
        flag = true;
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
    return flag;
  }

  static displayBooks() {
    const books = Book.getBooks();

    books.forEach((book) => {
      const bookMarkup = `<div class="book_list">
        <span class="book_text">"${book.title}" by ${book.author} </span>
        <button class="remove" id=${book.id}>Remove</button>
        </div>`;
      listContainer.innerHTML += bookMarkup;
      const deleteBtn = document.querySelectorAll('.remove');
      deleteBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
          const res = Book.removeBook(btn.id);
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
  const books = JSON.parse(localStorage.getItem('books')) || [];
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
    listContainer.innerHTML = '';
    Book.displayBooks();
  }
});

Book.displayBooks();


//Working with SPA

function openPage(i){
    addBookContainer.style.display='none';
    contactContainer.style.display='none';
    bookListContainer.style.display='none';
    if(i==1){
      addBookContainer.style.display='flex';
    }
    else if(i==2){
      contactContainer.style.display='flex';
    }
    else{
      bookListContainer.style.display='flex';
    }


  
}

let i=0;
linkItem.forEach((item)=>{
  
  item.addEventListener('click',function(){
    console.log((i));
    openPage(i);
  })
  
  i++;
  
})

for(let i=0; i<linkItem.length;i++){
 
    linkItem[i].addEventListener('click', () =>{
   openPage(i);
});
}
//   linkItem.addEventListener('click',openPage(i))
// }

// deleteBtn.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     const res = Book.removeBook(btn.id);
//     btn.parentElement.remove();
//     if (res) {
//       btn.parentElement.remove();
//     } else {
//       btn.classList.add('disabled');
//     }
//   });