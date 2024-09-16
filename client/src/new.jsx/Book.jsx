import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

function Book() {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        try {
            const res = await axios.get("http://localhost:5000/books");
            setBooks(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:5000/books/" + id);
            getBooks();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">Books</h1>
            <Row>
                {books.map((book) => (
                    <Col key={book.id} xs={12} md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={book.cover} alt={book.title} />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>{book.desc}</Card.Text>
                                <Button variant="danger" onClick={() => handleDelete(book.id)}>
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Book;
