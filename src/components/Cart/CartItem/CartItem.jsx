import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-2.webp";

const CartItem = () => {
    return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={prod} alt="" />
                </div>
                <div className="pro-details">
                    <span className="name">Product name</span>
                    <MdClose className="close-btn" />
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>5</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                    <span>3</span>
                        <span>x</span>
                        <span>&#8377;3297</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
