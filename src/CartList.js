import React, { useState, useEffect } from 'react';
function CartList({ cart }) {
const [CART, setCART] = useState([]);
useEffect(() => {
setCART(cart);
}, [cart]);
const updateQuantity = (index, delta) => {
const updatedCart = CART.map((item, i) =>
i === index
? { ...item, quantity: Math.max(0, item.quantity + delta) }
: item
);
setCART(updatedCart);
};
const totalPrice = CART.reduce((total, item) => total + item.price * item.quantity, 0);
return (
<div>
{CART?.map((cartitem, cartindex) => (
<div key={cartindex} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
<img src={cartitem.url} width={60} alt={cartitem.name} style={{ marginRight: '10px' }} />
<span>{cartitem.name}</span>
<button
onClick={() => updateQuantity(cartindex, -1)}
style={{ marginLeft: '10px' }}
>
-
</button>
<span style={{ margin: '0 10px' }}>{cartitem.quantity}</span>
<button
onClick={() => updateQuantity(cartindex, 1)}
style={{ marginRight: '10px' }}
>
+
</button>
<span>Rs. {cartitem.price * cartitem.quantity}</span>
</div>
))}
<p>
Total: <span>Rs. {totalPrice}</span>
</p>
</div>
);
}
export default CartList;