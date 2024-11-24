export function BookItem({book , onDelete}) {

  return <>


      <div
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {book.title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700">{book.description}</p>
          <div onClick={() => onDelete(book.id)}
             className="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            delete
          </div>
      </div>


  </>;
}
