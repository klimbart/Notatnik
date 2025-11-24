import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Formularz from './Formularz';
 
const Notatka = ({ data }) => {
  const [note, setNote] = useState(data);
 
  useEffect(() => {
    setNote(data);
  }, [data]);

  useEffect(() => {
        axios.get("http://localhost:5173/table")
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, []);
  
  const addNote = () =>{
    axios.post("http://localhost:5173/table", {title, content,})
    .then(res => {
      alert(res.data.message);
      setNote([...note, {title, content}])
    })
  }

  function handleRemove(id) {
    setNote(prev => prev.filter(item => item.id !== id));
  }
 
  return (
    <div className='notes-content'>
      {note.map(item => (
        <div
          key={item.id}
          style={{ background: item.colour }}
          className='note-container'>
           
          <div className='title-container'>
            <h3>{item.title}</h3>
          </div>
          <hr />
          <div className='content-container'>
            <p>{item.content}</p>
          </div>
          <div className='button-container'>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};
 
export default Notatka;