import { Button, Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, decreaseQuantity, deleteItem, increaseQuantity } from "../rtk/slices/cartSlice";
import Emptycart from "./Emptycart";
function Cart() {
    const dispatch = useDispatch();
    let cartProduct = useSelector(state => state.cart);
    const totalPrice = cartProduct.reduce((acc, product) => acc += product.price * product.quantity, 0);
    return (
        <>
            <Container>
                <h1 className="cart-heading">Cart page</h1>
                {
                    cartProduct.map((product) => {
                        return (
                            <div className="d-flex justify-content-start align-items-center mb-4 border p-2" key={product.id}>
                                <Image src={product.image} style={{ width: "90px", height: "110px", marginRight: "30px" }} alt="Product" />
                                <div className="info">
                                    <h1>{product.title}</h1>
                                    <span><span className="fs-5">Price:</span> {product.price}$</span>
                                    <div className="d-flex justify-content-start align-items-center ">
                                        <h4 className="mb-0">Quantity:</h4>
                                        {
                                            <div className="btns ms-2 border p-2 pt-0 ">
                                                <Button variant="primary"
                                                    className="incBtn"
                                                    onClick={() => {
                                                        dispatch(increaseQuantity(product));
                                                    }}
                                                >+</Button>
                                                <span className="fs-3 ms-1 me-1 position-relative quantity">{product.quantity}</span>
                                                <Button variant="primary"
                                                    className="decBtn"
                                                    onClick={
                                                        () => {
                                                            if (product.quantity > 1) {
                                                                dispatch(decreaseQuantity(product));
                                                            } else {
                                                                dispatch(deleteItem(product));
                                                            }
                                                        }
                                                    }
                                                >-</Button>
                                            </div>
                                        }
                                    </div>
                                    <Button variant="danger"
                                        className="d-block"
                                        onClick={
                                            () => {
                                                dispatch(deleteItem(product));
                                            }
                                        }
                                    >
                                        Remove</Button>
                                </div>
                            </div>
                        );
                    })
                }
                {
                    cartProduct.length >= 1 ?
                        <div className="d-flex justify-content-between align-items-center mt-3 border-top border-primary pb-5">
                            <Button variant="primary"
                                className="d-block mt-3"
                                onClick={
                                    () => {
                                        dispatch(clear());
                                    }
                                }
                            >
                                Clear Cart</Button>
                            <h3>Total price: {totalPrice.toFixed(2)} $</h3>
                        </div> : <Emptycart />
                }
            </Container>
        </>

    );

}
export default Cart;