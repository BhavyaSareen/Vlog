import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


function Book() {
    const [books, setBooks] = useState([])

    const getBooks = async () => {
        try {
            const res = await axios.get("http://localhost:5000/books");
            setBooks(res.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div>
            <h1>Books</h1>
            {books.map((book) => (
                // console.log(book);
                <div key={book.id}>
                    <p>{book.id}</p>
                    <p>{book.title}</p>
                    <p>{book.desc}</p>
                    <p>{book.cover}</p>
                </div>
            ))}

        </div>
    )
}

export default Book
