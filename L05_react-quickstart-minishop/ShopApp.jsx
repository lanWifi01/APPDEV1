import { useState } from 'react';

const products = [
    { id: 1, title: 'Cabbage', price: 1.5, isFruit: false, popular: false },
    { id: 2, title: 'Garlic', price: 2.0, isFruit: false, popular: true },
    { id: 3, title: 'Apple', price: 3.25, isFruit: true, popular: true },
    { id: 4, title: 'Mango', price: 4.0, isFruit: true, popular: false },
];

export function ProductCard({ product, onAddToCart }) {
    return (
        <>
            <div className="product-card">
                <h3>{product.title}</h3>
                {
                    (product.isFruit) ?
                        <p style={{ color: 'magenta' }}>
                            {product.price}
                        </p> :
                        <p style={{ color: 'darkgreen' }}>
                            {product.price}
                        </p>
                }
                {
                    (product.popular) && <span>⭐ Popular</span>
                }

                <button>Add to Cart</button>
            </div>
        </>
    );
}

export default function ShopApp() {

    function handleAddToCart() {

    }

    return (
        <div className="shop">
            <h1>Mini Fruit & Veg Stand</h1>

            <p>CART STATUS HERE</p>

            <div className="product-list">
                {products.map(product => 
                    <li>{product.title}</li>
                )}
            </div>
        </div>
    );
}