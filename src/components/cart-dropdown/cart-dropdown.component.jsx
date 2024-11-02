import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropDownContainer, CartItems} from './cart-dropdown.styles.jsx'


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.map((item) => (
                    <CartItem key={item.id} CartItem={item} />
                ))}
            </CartItems>
            <Button style={{ padding: "0 10px" }} onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    )
}

export default CartDropdown;