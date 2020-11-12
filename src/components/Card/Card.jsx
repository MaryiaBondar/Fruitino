import React from "react";
import CartIcon from '../../components/CartIcon/CartIcon'

const Card = (props) => {
    return (
        <div className="card-wrapper">
            <h4>{props.product.title}</h4>
            <span>price: <b>${props.product.price}</b></span>
            <img src={props.product.img}/>
            <div onClick={() => props.AddProductToCart(props.product)}>
                <CartIcon />
            </div>
        </div>
    )
}

export default Card
