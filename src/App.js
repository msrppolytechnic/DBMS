import Header from "./Header";
import Products from "./Product";
import { useState } from "react";
import CartList from "./CartList";
function App() {
const [product, setProduct] = useState([
{
url: 'https://p4-ofp.static.pub//fes/cms/2024/04/01/8w1vgn0kvd1l0cvykxqsc2is12fz80519230.png',
name: 'Lenovo Ideapad Slim 3',
price: 57000
},
{
url: 'https://www.casio.com/content/dam/casio/productinfo/locales/in/en/timepiece/product/watch/B/B6/B64/B640WC-5A/assets/B640WC-5A_Seq1.jpg.transform/main-visualsp/image.jpg',
name: 'Fastrack W98',
price: 1500
},
]);
const [cart, setCart] = useState([]);
const [showCart, setShowCart] = useState(false);
const addToCart = (data) => {
setCart([...cart, { ...data, quantity: 1 }]);
};
const handleShow = (value) => {
setShowCart(value);
};
return (
<div>
<Header count={cart.length} handleShow={handleShow} />
{showCart ? (
<CartList cart={cart} />
) : (
<Products product={product} addToCart={addToCart} />
)}
</div>
);
}
export default App;