
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector.js';

import { CartDropDownContainer, CartItems} from './cart-dropdown.styles.jsx'


const CartDropdown = () => {
    const  cartItems  = useSelector(selectCartItems);
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