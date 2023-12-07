import { cartSignal } from "../inc/Signals";

function CartContents(){

    const cartProducts = cartSignal.value;

    return(
        <div>
            <h3>Cart contents</h3>
            <ul>{cartProducts.map ( p => <li> key={p.id} x {p.count}</li>)}
            </ul>
        </div>
    );
}

export default CartContents;