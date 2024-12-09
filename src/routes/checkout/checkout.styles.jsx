import styled from "styled-components";


// CheckoutContainer
export const CheckoutContainer = styled.div`
    width: 90%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    margin: 20px auto;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
`;

// HeaderBlock
export const HeaderBlock = styled.div`
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;

    @media screen and (min-width: 769px) {
        width: 23%;
        margin-bottom: 0;
    }
`;

// ProductCard
export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;

    @media screen and (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

// ProductImage
export const ProductImage = styled.img`
    width: 100px;
    height: auto;
    margin-bottom: 10px;

    @media screen and (min-width: 769px) {
        margin-right: 20px;
        margin-bottom: 0;
    }
`;

// Total
export const Total = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0;
    text-align: center;

    @media screen and (min-width: 769px) {
        text-align: right;
        font-size: 36px;
    }
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
    padding: 10px 0;

    @media screen and (max-width: 768px) {
        display: none;
`;

