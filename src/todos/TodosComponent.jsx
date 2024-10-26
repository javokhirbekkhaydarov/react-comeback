import { useState } from "react";

export default function MyApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function addTodo(e) {
    e.preventDefault();
    if (newTodo.length === 0) {
      alert("please write todo ");
    } else {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  }

  return (
      <div className="text-center d-flex flex-column justify-content-center">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center align-content-center">
          <h1>comeback 🔥</h1>

          <form className="col-6" onSubmit={addTodo}>
            <input
                className="form-control"
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
          </form>

          {todos.length === 0 ? (
              <p>no todo</p>
          ) : (
              <ul className="list-group w-25 d-flex">
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className="list d-flex justify-content-between align-items-center"
                    >
                      {editIndex === index ? (
                          <input
                              className="form-control"
                              type="text"
                              value={todos[editIndex]}
                              onChange={(e) =>
                                  setTodos([
                                    ...todos.slice(0, editIndex),
                                    e.target.value,
                                    ...todos.slice(editIndex + 1),
                                  ])
                              }
                          />
                      ) : (
                          <span>{todo}</span>
                      )}
                      {editIndex === index ? (
                          <>
                            <button className="btn" onClick={() => setEditIndex(null)}>
                              x
                            </button>
                            <button className="btn" onClick={() => setEditIndex(null)}>
                              Save
                            </button>
                          </>
                      ) : (
                          <>
                            <button className="btn" onClick={() => setEditIndex(index)}>
                              Edit
                            </button>
                            <button
                                className="btn"
                                onClick={() =>
                                    setTodos([
                                      ...todos.slice(0, index),
                                      ...todos.slice(index + 1),
                                    ])
                                }
                            >
                              Delete
                            </button>
                          </>
                      )}
                    </li>
                ))}
              </ul>
          )}
        </div>
      </div>
  );
}
