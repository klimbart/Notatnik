import React, { useState } from 'react'
import Notatka from './Notatka';
import axios from "axios";
import { useEffect } from 'react';
 
const Formularz = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [colour, setColour] = useState("")
    const [data, setData] = useState([])
    
    function handleSubmit(e){
        e.preventDefault();
        colour != "" && title != "" && content != "" ?
        setData([...data, {id: data.length + 1, title: title, content: content, colour: colour}])
        : alert("Wybierz kolor notatki");
 
        setColour("")
        setContent("")
        setTitle("")
       
    }

    
    

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <label>Tytul:<input value={title} onChange={(e) => setTitle(e.target.value)}/></label>
            <br />
            <label>Text:<input value={content} onChange={(e) => setContent(e.target.value)}/></label>
            <br />
            <select value={colour} onChange={(e) => setColour(e.target.value)}>
                <option value="">Wybierz kolor</option>
                <option value="red">Czerwony</option>
                <option value="blue">Niebieski</option>
                <option value="green">Zielony</option>
            </select>
            <button type="submit">Wyślij</button>
        </form>
    </div>
  )
}
 
export default Formularz;