import React, {useState} from 'react'
import add from './image/add.png'

const NewInputs = ({modif}) => {
    const [newModif, setNewModif] = useState('')
    const handleSubmit =(e) =>{
        e.preventDefault();
        modif(newModif);
        setNewModif('');
    }
    return (
        <form className="part" >
            <input type="text" placeholder="add something..." className="form" value={newModif} onChange={(e) =>{setNewModif(e.target.value)}} />
            <button onClick={handleSubmit}> <img className="photo" src={add} alt="" /> </button>
        </form>
    )
}

export default NewInputs
