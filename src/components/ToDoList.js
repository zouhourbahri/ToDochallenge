import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ListOfInputs, suppression, confirmed}) => {
    return (
        <div>
           {ListOfInputs.map((el, i)=> <ToDo key={i} task={el} suppression={suppression} confirmed={confirmed}/>)} 
        </div>
    )
}

export default ToDoList
