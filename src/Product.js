import React from 'react';
export default function Products({ product, addToCart }) {
return (
<div className="flex">
{product.map((productitem, productIndex) => (
<div key={productIndex} style={{ margin: '10px', textAlign: 'center' }}>
<img
src={productitem.url}
width="100"
alt={productitem.name}
style={{ display: 'block', margin: '0 auto' }}
/>
<p>{productitem.name}</p>
<p>Rs. {productitem.price}</p>
<button onClick={() => addToCart(productitem)}>
Add to Cart
</button>
</div>
))}
</div>
);
}