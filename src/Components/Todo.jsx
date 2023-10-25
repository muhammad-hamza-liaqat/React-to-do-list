import React, { useState } from 'react';
import '../App.css';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TextField } from '@mui/material';

const Todo = () => {
    // now the state management code will be here....
    const [inputValue, setInputValue] = useState('');
    const [Items, setItems] = useState([]);

    const inputValueEvent=(event)=>{
        setInputValue(event.target.value);
    }
    
    const addInputValue=()=>{
        //console.log("Hello");
        setItems([...Items, inputValue]);
        setInputValue("");
   
    }
    
  return (
    // jsx code here
    <>
        <div className="mainDiv">
            <div className="TodoHeading">
                <h1>Task Memo</h1>
                
                <hr/>
            </div>
            <div className='taskLine'>
                <p>Add your ToDo(s) here: </p>
            </div>
        </div>
        <div className='inputSection'>
            <div className="inputField">
                <TextField onChange={inputValueEvent} label="Add your task here!!" value={inputValue} color="primary" focused />
            </div>
            <div className='Add-btn'>
                <div onClick={addInputValue} className="button">+</div>
            </div>
        </div>

        <div className='SecondSection'>
            <h1>Memo(s) here</h1>
            <div className='data'>
                <ol>
                    
                    {
                        Items.map((added, index)=>{
                            
                            return <li> key={index} <DeleteOutlineIcon/> {added}</li>    
                            
                            
                        })
                    }
                </ol>
                
            </div>
        </div>
        
    </>
  )
}

export default Todo

