const addBtn = document.getElementById('add');
// Declaring varibale for the books' container
const  main = document.querySelector('main')

// Creating Array of objects(Book List)
let books_list = [
    { id:1,
        title : 'The Alchemist',
        author : 'Paulo Coelho', 
    },

    { id:2,
        title : 'The Animal farm',
        author : 'Paulo Jack',
    }
]

// Function to display the added book
function displayBook(book) {
        const bookMarkup= `<div class="book_list">
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button class="remove" id=${book.id}>Remove</button>
        <hr>`;
    main.innerHTML +=bookMarkup; 
    let deleteBtn= document.querySelectorAll('.remove');
    deleteBtn.forEach((btn)=>{
    btn.addEventListener('click',function(){
        deleteBook(btn.id);
        console.log(btn.id);

    })
});
}

// recursively call displayBook(book);
async function displayBooks(){
    books_list.forEach((book)=>{
        displayBook(book);
        
    });
}

addBtn.addEventListener('click', function() {
    let title = document.getElementById('title')
    let author = document.getElementById('author')
    let id= books_list.length+1;
    let book = {
        id: id,
        title: title.value,
        author: author.value,
    }
    displayBook(book);
    books_list.push(book);
});


function deleteBook(id){
    books_list = books_list.filter(item=>{
    return item.id!==parseInt(id);
    })
    console.log(books_list)
    displayBooks();
}

// deleteBook(3);

window.addEventListener('load',displayBooks);
