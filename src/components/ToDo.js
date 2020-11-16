import React from 'react'
//import confirm from './image/confirm.jpg'
import deleted from './image/delete.png'
import '../App.css'


const ToDo = ({ task, suppression, confirmed }) => {
    const handleClick = () => {
        return (
            suppression(task.id)
        )
    }

    const confirmation = () => {
        return (
            confirmed(task.id)

        )
    }
    return (
        <div className="part">
            <h1 className={task.done ? "ok" : "Nok"}> {task.description}</h1>
            <i onClick={confirmation} className="far fa-check-circle icon btn"></i>
            <button className="btn" onClick={handleClick}> <img className="photo" src={deleted} alt="" /> </button>
        </div>
    )
}

export default ToDo




