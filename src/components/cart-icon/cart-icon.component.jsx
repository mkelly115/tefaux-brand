import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import {CartIconContainer, ItemCount} from './cart-icon.styles.jsx'

const CartIcon = () => {

    const { isCartopen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartopen)

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount as='span'>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon
