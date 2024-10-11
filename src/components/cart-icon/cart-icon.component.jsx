import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import './cart-icon.styles.scss'

const CartIcon = () => {

    const { isCartopen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartopen)

    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon

// click add to shopping cart

// item will add +1 to shopping cart counter
