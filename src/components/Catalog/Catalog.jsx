import React from 'react';
import Card from "../Card/Card";
import DATA from '../../data.js'

const Catalog = (props) => {

    return (
        <section>
            {DATA.map(item => <Card product={item} AddProductToCart={props.AddProductToCart} />)}
        </section>
    )
}


export default Catalog
