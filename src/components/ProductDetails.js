import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { addToCart } from '../rtk/slices/cartSlice';
import { useDispatch } from 'react-redux';
import Rating from './Rating';

function ProductDetails() {
    const param = useParams();
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${param.productId}`)
            .then((resolve) => resolve.json())
            .then((resolve) => setProduct(resolve))
            .catch((rejected) => console.log(`Error Code ${rejected}`))
    }, []);
    return (
        <Container>
            <div className='d-flex justify-content-center align-items-center product-details text-center'>
                <img src={product.image}
                    className='img-fluid w-50 h-50 pe-3 border border-start-0 border-top-0 border-bottom-0 border-dark me-5'
                    alt="productImage" />
                <div className="info">
                    <h3 className='mb-3 text-primary'>{product.title}</h3>
                    <p className='fs-5'>{product.description}</p>
                    <div className='d-flex justify-content-center mb-2 align-items-center'>
                        <h5 className='mb-0'>Price: </h5>
                        <span className='fs-5'>{product.price} $</span>
                    </div>
                    <div>
                        <div className="rate d-flex justify-content-center align-items-center">
                            <span>Rate:</span><Rating rating={Math.floor(product.rating?.rate)} />
                        </div>
                    </div>
                    <Button variant="primary"
                        className=" mt-3"
                        onClick={
                            () => {
                                dispatch(addToCart(product));

                            }
                        }
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
        </Container>
    );
}

export default ProductDetails