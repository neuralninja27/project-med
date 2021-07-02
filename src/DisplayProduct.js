import React, { Component } from 'react';

class DisplayProducts extends Component {

    render() {
        const {products} = this.props;
        console.log(products);
        return (
            <div>
                <h1>Order Products</h1>
                {products.map((product, key) => (
                    <li>{product.productName} - Rs {product.price}</li>
                ) 
                )}
            </div>
        )
    }
}

export default DisplayProducts;