// Creating Array of objects(Book List)
const books_list = [
    { title : 'The Alchemist',
     author : 'Paulo Coelho', 
    },

    { title : 'The Animal farm',
      author : 'Paulo Jack',
    }
]


// Declaring varibale for the books' container
let  main = document.querySelector('main')

// Function to display the added books
function displayBook() {
    books_list.forEach(book => {
    main.innerHTML += 
    `<div class="book_list">
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button class="remove">Remove</button>
    <hr>
</div>`
})
}
// displayBook(book);


let addBtn = document.getElementById('add');
let forum = document.getElementsByClassName('forum');
let book;
addBtn.addEventListener('click', function() {
    let t = document.getElementById('title')
    let a = document.getElementById('author')
    book = {title:t, author:a};
    books_list.push(book);
    console.log('hi');
}
);
displayBook();



// let book = {title:'title', author:'author'};
// books_list.push(book);











