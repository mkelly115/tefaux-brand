import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {CartIconContainer, ItemCount} from './cart-icon.styles.jsx'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';
import { useNavigate } from 'react-router-dom';
const CartIcon = () => {

    const useIsMobile = () => {
        const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
        useEffect(() => {
            const handleResize = () => setIsMobile(window.innerWidth <= 768);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
    
        return isMobile;
    };

    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const isMobile = useIsMobile(); 

    const handleCartClick = () => {
        if (isMobile) {
            navigate('/checkout'); 
        } else {
            dispatch(setIsCartOpen(!isCartOpen)); 
        }
    };

    return (
        <CartIconContainer onClick={handleCartClick}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount as='span'>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon
