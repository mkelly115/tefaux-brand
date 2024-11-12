import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {NavigationContainer, NavLink, NavLinks, LogoContainer} from './navigation.styles.jsx'

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const { isCartopen } = useContext(CartContext)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartopen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
};

export default Navigation