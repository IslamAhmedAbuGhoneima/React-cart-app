import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fetchProducts } from '../rtk/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../rtk/slices/cartSlice';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Products() {
    const dispatch = useDispatch();
    let products = useSelector((state) => state.products);
    const navegate = useNavigate();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    const notify = () => toast.success("Product Now In Cart");
    return (
        <>
            <section>
                {
                    products.length >= 1 ? <Container>
                        <h1 className='product-heading'>Product Page</h1>
                        <Row>
                            {
                                products.map((product) => {
                                    return (
                                        <Col xl={3} md={4} sm={6} className='mb-5' key={product.id}>
                                            <Card style={{ height: "100%" }} className='position-relative overflow-hidden pt-5 pb-5 text-center product-card'>
                                                <Card.Img variant="top" src={product.image} className='img-fluid h-25 w-25 m-auto' alt='Products Img' />
                                                <Card.Body>
                                                    <Card.Title>{product.title}</Card.Title>
                                                    <Card.Text>
                                                        {(product.description).slice(0, 100)}...
                                                    </Card.Text>
                                                    <Card.Text className='fs-5 text-center mt-2 mb-5'>
                                                        Price: {product.price}$
                                                    </Card.Text>
                                                    <Button variant="primary"
                                                        className="w-75 position-absolute bottom-0 mb-5 start-50 translate-middle-x"
                                                        onClick={
                                                            () => {
                                                                dispatch(addToCart(product));
                                                                notify();
                                                            }
                                                        }
                                                    >
                                                        Add to Cart
                                                    </Button>
                                                    <ToastContainer
                                                        autoClose={2000}
                                                        theme='light'
                                                    />
                                                    <Button
                                                        variant='primary'
                                                        className='text-light p-1 position-absolute top-0 end-0 rounded-0 details-btn'
                                                        onClick={
                                                            () => {
                                                                navegate(`product/${product.id}`)
                                                            }
                                                        }
                                                    >
                                                        Click here for more details
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </Container> : <Loader />
                }
            </section>
        </>
    );
}

export default Products;