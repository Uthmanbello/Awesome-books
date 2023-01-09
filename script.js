function addItem() {
    let library = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
    };

    let bookList = document.getElementById('book-list');

    let newBook = document.createElement('p');
    newBook.innerHTML= `${library.title}<br>${library.author}`;

    let removeBook = document.createElement('button');
    removeBook.id = 'remove-btn';
    removeBook.classList.add('${library.title}');
    removeBook.innerHTML = 'Remove';

    let rule = document.createElement('hr');

    bookList.appendChild(newBook);
    bookList.appendChild(removeBook);
    bookList.appendChild(rule);
  }
  
  function removeItem() {
    // get the list of items
    let bookList = document.getElementById('book-list');
    let newBook = document.querySelector('p');
    // remove the last item from the list
    if (newBook) {
        newBook.parentNode.removeChild(newBook);
    }
  }
  
  // add event listeners to the buttons
  let addBook = document.getElementById('add-btn');
  addBook.addEventListener('click', addItem);
  
  
//   document.getElementById('remove-btn').addEventListener('click', removeItem);
  removeBook.addEventListener('click', removeItem);