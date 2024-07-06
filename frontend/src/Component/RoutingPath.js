import { Routes, Route } from 'react-router-dom';
import ProductList from "./ProductList";
import AddProduct from './AddProduct';
import UpdateProduct from './EditProductForm';
import DeleteProduct from './DeleteProduct';
import EditProductForm from './EditProductForm';

function RoutingPath() {
    const element =
        <>
            <Routes>
                {/* <Route path='/' element={<ProductList/>}/> */}
                <Route path='/products' element={<ProductList />} />
                <Route path='/add' element={<AddProduct />} />
                <Route path='EditProductForm/:id' element={<EditProductForm />} />
                <Route path='DeleteProduct/:id' element={<DeleteProduct />} />
            </Routes>
        </>
    return element;
}
export default RoutingPath;
