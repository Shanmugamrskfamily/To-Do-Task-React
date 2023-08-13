import React from "react";

export default function Todo({ todo, updateStatus, editTodo, deleteTodo }) {
    return (
        <div className='col-4'>
            <div className="card d-grid row row-col-4 alert-success w-50" key={todo.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                <p><b>Name : </b>{todo.taskName}</p>
                <p><b>Description : </b>{todo.description}</p>
                <div className='mb-5'>
                    <label htmlFor="status" className='me-1'><b>Status:</b></label>
                    <select className={`opt-complete ${todo.status === "Completed" ? "bg-success text-white" : "bg-danger text-white"}`}
                        value={todo.status}
                        name='status'
                        onChange={(e) => updateStatus(todo.id, e.target.value)}
                    >
                        <option value="Completed" className={`opt-complete ${todo.status === "Completed" ? "bg-success" : ""}`}>Completed</option>
                        <option value="Not Completed" className={`opt-not ${todo.status !== "Completed" ? "bg-danger text-white" : ""}`}>Not Completed</option>
                    </select>
                </div>
                <div className="d-grid gap-2 d-md-block ed-del-but">
                    <button className="btn but-edit me-3" onClick={() => editTodo(todo.id)} type="button">Edit</button>
                    <button className="btn butt" onClick={() => deleteTodo(todo.id)} type="button">Delete</button>
                </div>
            </div>
        </div>
    )
}
