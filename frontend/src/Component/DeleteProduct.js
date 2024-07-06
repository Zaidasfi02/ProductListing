import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Button, Alert, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function DeleteProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8080/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [id]);

    const handleDelete = () => {
        fetch(`http://localhost:8080/products/${id}`, {
            method: 'DELETE',
        }).then(() => {
            setMessage('Product deleted successfully!');
            setTimeout(() => {
                window.location.href = '/'; // Redirect to product list after 2 seconds
            }, 2000); // Redirect after 2 seconds
        });
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <h1>Delete Product</h1>
            {message && <Alert variant="success">{message}</Alert>}
            <p>Are you sure you want to delete the following product?</p>

            <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img variant="top" src={product.imgUrl} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        Id-{product.id} <br />
                        Description-{product.description}<br />
                        Price-{product.price}<br />
                        Quatity-{product.quantity}<br />
                    </Card.Text>

                </Card.Body>
            </Card>
            <Button  variant="danger" onClick={handleDelete}>Delete</Button>
            <Link to="/" className="btn btn-secondary m-4">Cancel</Link>
        </Container>
    );
}

export default DeleteProduct;
