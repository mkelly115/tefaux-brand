import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action.js';
import { CheckoutItemContainer, PriceName, Quantity, RemoveButton } from './checkout-item.styles.jsx'

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));


    return (
        <CheckoutItemContainer>
            <div>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <PriceName as='span'> {name} </PriceName>
            <Quantity as='span'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </Quantity>
            <PriceName as='span'>{price} </PriceName>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
};

export default CheckoutItem