import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import {Nav , Navbar} from 'react-bootstrap';
function Header() {
    const element =
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Product Listing</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Nav.Link as={Link} to='/Home'>Home</Nav.Link> */}
                        <Nav.Link as={Link} to='/products' className='px-5'>Product List</Nav.Link>
                        <Nav.Link as={Link} to='/add' className='px-3'>Add Product</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    return element;
}

export default Header;
