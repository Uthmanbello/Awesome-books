function addItem() {
  let library = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
  };

  const bookList = document.getElementById("book-list");

  const item = document.createElement('div');
  item.classList.add('items');

  const newBook = document.createElement("p");
  newBook.classList.add('disp-book')
  newBook.innerHTML = `${library.title}<br>${library.author}`;

  const removeBook = document.createElement("button");
  removeBook.id = 'rmv';
  removeBook.classList.add("book-remove");
  removeBook.innerHTML = "Remove";
  removeBook.addEventListener('click', removeItem);

  const rule = document.createElement("hr");

  item.append(newBook);
  item.append(removeBook);
  item.append(rule);
  bookList.append(item);

  document.getElementById("forms").reset();
}

function removeItem (e) {
    const item = e.target.closest('.items');
  
    item.querySelector('.book-remove').removeEventListener('click', removeItem);
  
    item.parentElement.removeChild(item);
};

addBook = document.getElementById("add-btn");
addBook.addEventListener("click", addItem);



