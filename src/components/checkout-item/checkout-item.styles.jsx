import styled from "styled-components";

// CheckoutItemContainer
export const CheckoutItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0;
    font-size: 20px;
    border-bottom: 1px solid darkgrey;

    @media screen and (max-width: 768px) {
        flex-wrap: nowrap; 
        justify-content: space-between;
    }
`;

// ImageContainer
export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 768px) {
        width: 80px;
        height: 80px;
    }
`;

// DetailsContainer
export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex: 1; 
        align-items: center;
        justify-content: center;
        padding-right: 10px;
    }
`;

// PriceName
export const PriceName = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;

    @media screen and (max-width: 768px) {
        text-align: center;
        width: 100%;
        font-size: 14px;
    }
`;

// QuantityControls
export const QuantityControls = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    .arrow {
        cursor: pointer;
        font-size: 20px;
        user-select: none;
    }

    .value {
        margin: 0 10px;
    }

    @media screen and (max-width: 768px) {
        justify-content: flex-start;
        font-size: 14px;
        padding: 5px;
    }
`;

// RemoveButtonContainer
export const RemoveButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;

    @media screen and (max-width: 768px) {
        position: relative;
        right: 0;
    }
`;

// RemoveButton
export const RemoveButton = styled.div`
    color: black;
    cursor: pointer;
    font-size: 20px;

    @media screen and (max-width: 768px) {
        margin: 0;
    }
`;