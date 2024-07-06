import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <div>
            <h1>Product List</h1>
                    <Row md={3}> 
                {products.map(product => (
                    <Col key={product.id}>
                    <Card>
                        <Card.Img src={product.imgUrl} alt={product.name} />
                        <Card.Body>
                        <Card.Title><h2>{product.name}</h2></Card.Title>
                        <Card.Text>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                        </Card.Text>
                        <Button className="btn-primary" onClick={() => navigate(`/EditProductForm/${product.id}`)}>Modify</Button><br/>
                        <Button className="btn-danger mt-2" onClick={() => navigate(`/DeleteProduct/${product.id}`)}>Delete</Button>
                        </Card.Body>

                    </Card>
                    </Col>
                ))}
                </Row>
        </div>
    );
};

export default ProductList;
