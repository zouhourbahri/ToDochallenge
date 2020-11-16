import React,{useState} from 'react'
import './App.css';
import NewInputs from './components/NewInputs'
import ToDoList from './components/ToDoList'


function App() {
  const [ListOfInputs, setListOfInputs] =useState([
    {
      id: "1",
      description:"step 1",
      done:false,
    },
    {
      id: "2",
      description:"step 2",
      done:false,
    },
    {
      id: "3",
      description:"step 3",
      done:false,
    },
  ]);

  const modif =(x) =>x?setListOfInputs([...ListOfInputs, {id:Math.random(), description: x,done:false}]) : null; 
  const suppression = (y) => setListOfInputs(ListOfInputs.filter(el=>el.id!==y));
  const confirmed = (e) => setListOfInputs(ListOfInputs.map(el=>el.id===e ? {id:el.id, description: el.description,done:!el.done}:el));
  
  return (
    <div className="App">
      <ToDoList ListOfInputs={ListOfInputs} suppression={suppression} confirmed={confirmed}/>
      <NewInputs modif={modif} />
    </div>
  );
}

export default App;
