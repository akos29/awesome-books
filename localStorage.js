const bookList = {
    title: '',
    author: '',
  };
  
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  
  titleInput.addEventListener('input', () => {
    bookList.title = titleInput.value;
    localStorage.setItem('data', JSON.stringify(bookList));
  });
  
  authorInput.addEventListener('input', () => {
    bookList.author = authorInput.value;
    localStorage.setItem('data', JSON.stringify(bookList));
  });
  
  if (localStorage.getItem('data')) {
    const formValue = localStorage.getItem('data');
    const formValueObj = JSON.parse(formValue);
    titleInput.value = formValueObj.title;
    authorInput.value = formValueObj.author;
  }
  