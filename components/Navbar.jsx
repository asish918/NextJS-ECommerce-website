import react from "react";
import Link from "next/link";
import { AiOutlineShopping } from 'react-icons/ai'
import Cart from "./Cart";
import { UseStateContext } from "../context/StateContext";

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = UseStateContext();

    return (
        <div className="navbar-container">
            <p className="logo">
                <Link href='/'>Boat Headphones</Link>
            </p>
            <button type="button" className="cart-icon" onClick={() => setShowCart(!showCart)}>
                <AiOutlineShopping />
                <span className="cart-item-qty">{totalQuantities}</span>
            </button>

            {showCart && <Cart />}
        </div>
    )
}

export default Navbar;