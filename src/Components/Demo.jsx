import React, { useEffect, useState } from 'react';
import '../App.css';
import { TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Demo = () => {
    const [input, setInput] = useState('');
    const [array, setArray] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    useEffect(() => {
        // get items from the local storage
        console.log("use effect mounted!!");
        const storedArray = localStorage.getItem('taskArray');
        if (storedArray) {
            setArray(JSON.parse(storedArray));
        }
    },[]);

    const addArray = () => {
        if (input.trim() !== '') {
            const newArray = [...array, input];
            setArray(newArray);
            setInput('');
            localStorage.setItem('taskArray', JSON.stringify(newArray));
            console.log("added value in array");
        } else {
            alert("Enter a valid input, you might have entered an empty space");
        }
    }

    const handleDelete = (index) => {
        const newArray = array.filter((_, i) => i !== index);
        setArray(newArray);
        localStorage.setItem('taskArray', JSON.stringify(newArray));
        console.log("delete the value from the array");
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setInput(array[index]);
    };

    const handleSaveEdit = () => {
        if (input.trim() !== '') {
            const newArray = [...array];
            newArray[editIndex] = input;
            setArray(newArray);
            setInput('');
            setEditIndex(-1);
            localStorage.setItem('taskArray', JSON.stringify(newArray));
            console.log("edited the value in the array successfully");
        } else {
            alert("Enter a valid input, you might have entered an empty space");
        }
    };

    return (
        <>
            <div className="mainDiv">
                <div className="TodoHeading">
                    <h1>Task Memo</h1>
                    <hr />
                </div>
                <div className='taskLine'>
                    <p>Add your ToDo(s) here: </p>
                </div>
            </div>
            <div className='inputSection'>
                <div className="inputField">
                    <TextField value={input} onChange={(e) => setInput(e.target.value)} label="Add your task here!!" color="primary" focused />
                </div>
                <div className='Add-btn'>
                    <div onClick={addArray} className="button">+</div>
                </div>
            </div>

            <div className='SecondSection'>
                <h1>Memo(s) here</h1>
                <div className='data'>
                    <ol>
                        {array.map((item, index) => (
                            <div className='displayData' key={index}>
                                {editIndex === index ? (
                                    <div className='editContainer'>
                                        <TextField
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            label="Edit task"
                                            color="primary"
                                            focused
                                        />
                                        <button onClick={handleSaveEdit}>Save</button>
                                    </div>
                                ) : (
                                    <div className='displayItem'>
                                        <span className='displayList'>{item}</span>
                                        <div className='displayIcons'>
                                            <button onClick={() => handleDelete(index)}>
                                                <DeleteForeverIcon />
                                            </button>
                                            <button onClick={() => handleEdit(index)} className="buttonEdit">
                                                <EditIcon />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Demo;