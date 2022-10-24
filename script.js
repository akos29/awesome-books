const addBtn = document.getElementById('add');
// Declaring varibale for the books' container
const  main = document.querySelector('main')
const  deleteBtn= document.querySelectorAll('.remove');

deleteBtn.forEach(function(btn){
    btn.addEventListener('click',function(){
        // deleteBook(1);
        console.log("hello");
    })
});

// Creating Array of objects(Book List)
const books_list = [
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

 
}

// recursively call displayBook(book);
function displayBooks(){
    books_list.forEach((book)=>{
        displayBook(book);
    });
}


addBtn.addEventListener('click', function() {
    let t = document.getElementById('title')
    let a = document.getElementById('author')
    const ids= books_list.length+1;
    let book ={id:ids,title:t,author:a}
    
    createBook(ids,t,a);

    displayBook(book);
}
);

function createBook(bId,bAuthor,bTitle){
    const book={id: bId,title:bTitle,author:bAuthor};
    books_list.push(book)
}



function deleteBook(id){
    let books_lists=books_list.filter(item=>{
        return item.id!==id;
    })
    console.log(books_lists)
}

// deleteBook(3);

window.addEventListener('load',displayBooks);