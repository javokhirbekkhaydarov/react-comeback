import React, { useState } from "react";
import { getAllBooks, addBook, deleteBook } from "../../utils/localStorage";
import { BookItem } from "./BookItem";
import toast, { Toaster } from "react-hot-toast";

export default function BookList() {
  const [books, setBooks] = useState(getAllBooks());
  const addNewBook = () => {
    let bookTitle = document.getElementById("book-title");
    let bookDesc = document.getElementById("book-desc");

    if (bookDesc.value && bookTitle.value) {
      const book = {
        id: Math.random(books.length),
        title: bookTitle.value,
        description: bookDesc.value,
      };
      addBook(book);
      setBooks((state) => [...state, book]);
      bookTitle.value = "";
      bookDesc.value = "";
      notify("success");
    } else {
      notify("error");
    }
  };
  function notify(status) {
    if (status === "success") {
      toast.success("Book is saved", {
        position: "bottom-center",
      });
    } else if (status === "error") {
      toast.error("Please write title and description.", {
        position: "bottom-center",
      });
    }
  }

  const deleteFunc = (id) => {
    deleteBook(id);
    console.log(id);
    setBooks((items) => items.filter((item) => item.id !== id));
  };
  return (
    <>
      <Toaster />
      <div className="flex gap-2 p-4">
        <input placeholder="book title" type="text" id="book-title" />
        <input placeholder="book description" type="text" id="book-desc" />
        <div
          onClick={addNewBook}
          className="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          add
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        {books.map((book) => {
          return <BookItem key={book.id} book={book} onDelete={deleteFunc} />;
        })}
      </div>
    </>
  );
}
