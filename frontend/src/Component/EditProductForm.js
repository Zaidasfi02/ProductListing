import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Assuming you use React Router for navigation
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditProductForm = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
        quantity: 0,
        imgUrl: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product: ', error);
            });
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:8080/products/${id}`, product)
            .then(response => {
                console.log('Product updated successfully: ', response.data);
                // Redirect to product list or another page after successful update
                window.location.replace('/'); // Example: Redirect to home page
            })
            .catch(error => {
                console.error('Error updating product: ', error);
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h2>Edit Product</h2>
            <Form.Group className="mb-4 col-4" controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={product.name} onChange={handleInputChange} required/>
        </Form.Group>
        <Form.Group className="mb-4 col-4" controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="textarea" placeholder="Enter description" value={product.description} onChange={handleInputChange} required/>
        </Form.Group>
        <Form.Group className="mb-4 col-2" controlId="formGridPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter price" value={product.price} onChange={handleInputChange} required/>
        </Form.Group>
        <Form.Group className="mb-4 col-2" controlId="formGridQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="Enter quantity" value={product.quantity} onChange={handleInputChange} required/>
        </Form.Group>
        <Form.Group className="mb-4 col-4" controlId="formGridImageUrl">
          <Form.Label>Image Url</Form.Label>
          <Form.Control type="text" placeholder="Enter ImageUrl" value={product.imgUrl} onChange={handleInputChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Update Product
          </Button>
        </Form>
    );
};

export default EditProductForm;
