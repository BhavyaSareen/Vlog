import axios from 'axios';
import React from 'react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

function Add() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [cover, setCover] = useState("");
    const [error, setError] = useState(false);
    // const navigate = useNavigate();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }
    const handleCoverChange = (e) => {
        setCover(e.target.value);
    }
    const handleDescChange = (e) => {
        setDesc(e.target.value);
    }

    const handleClick = async (e) => {
        e.preventDefault();
        // navigate("/")
        try {
            await axios.post("http://localhost:5000/books", {
                title, desc, cover, price
            });
        }
        catch (err) {
            console.log(err);
            setError(true);
        }
    }
    return (
        <div>
            <h1>Add New Book</h1>
            <input type="text" name="title" value={title} onChange={handleTitleChange} />
            <input type="number" name="price" value={price} onChange={handlePriceChange} />
            <input type="text" name="desc" value={desc} onChange={handleDescChange} />
            <input type="text" name="cover" value={cover} onChange={handleCoverChange} />
            <button onClick={handleClick}>Add</button>
            {error && "Something went wrong"}
        </div>
    )
}

export default Add
