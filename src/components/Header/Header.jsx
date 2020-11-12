import React from "react";
import Logo from "../../img/logo (2).png";
import CartIcon from "../CartIcon/CartIcon";
import './Header.css'

const Header = (props) => {
    return (
        <header>
            <div className="logo-container">
                <img src={Logo} alt=""/>
            </div>
            <menu>
                <li className="sub-menu">
                    <div>Category <span className="icon-arrow"> </span></div>
                </li>
                <li>Shop</li>
                <li>Reviews</li>
            </menu>
            <div className="cart-container">
                <CartIcon/>
                <span className="items-count">0</span>
                <span className="total-price">$0.00</span>
            </div>
        </header>
    )
}

export default Header
