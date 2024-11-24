export function getAllBooks() {
  return JSON.parse(localStorage.getItem("books")) || [];
}
export function addBook(book) {
  const books = getAllBooks();
  const newBook = JSON.stringify([...books, book]);
  localStorage.setItem("books", newBook);

}

export function deleteBook(id) {
  const books = getAllBooks();
  const newBook = books.filter((e) => e.id !== id);
  localStorage.setItem("books", JSON.stringify(newBook));
}
