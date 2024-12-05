import { useSelector } from 'react-redux';
import {selectCartItems, selectCartTotal} from '../../store/cart/cart.selector.js'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component.jsx';
import {CheckoutContainer, Header, HeaderBlock, Total} from './checkout.styles.jsx'
import './checkout.styles.jsx'


const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <CheckoutContainer>
            <Header>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </Header>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <Total as='span'>Total: ${cartTotal}</Total>
            <PaymentForm />
        </CheckoutContainer>
    )

};

export default Checkout