import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const AddProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [imgUrl, setImgUrl] = useState('');

    const handleSubmit = (event) => { 
        event.preventDefault();

        const newProduct = {
            name,
            description,
            price,
            quantity,
            imgUrl
        };

        axios.post('http://localhost:8080/products', newProduct)
            .then(response => {
                console.log('Product created successfully: ', response.data);
                // Optionally, update the product list after successful creation
            })
            .catch(error => {
                console.error('Error creating product: ', error);
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h2>Add New Product</h2>
        <Form.Group className="mb-4 col-4" controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name}  onChange={e => setName(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-4 col-4" controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="textarea" placeholder="Enter description" value={description}  onChange={e => setDescription(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-4 col-2" controlId="formGridPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter price" value={price}  onChange={e => setPrice(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-4 col-2" controlId="formGridQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="Enter quantity" value={quantity}  onChange={e => setQuantity(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-4 col-4" controlId="formGridImageUrl">
          <Form.Label>Image Url</Form.Label>
          <Form.Control type="text" placeholder="Enter ImageUrl" value={imgUrl}  onChange={e => setImgUrl(e.target.value)} required/>
        </Form.Group>
            <Button variant="primary" type="submit">
            Add Product
          </Button>
        </Form>
    );
};

export default AddProduct;
