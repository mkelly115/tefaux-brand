import styled from "styled-components";

// CheckoutItemContainer
export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap; 
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column; 
        align-items: center; 
    }

    .image-container {
        width: 23%;
        padding-right: 15px;

        img {
            width: 100%;
            height: 100%;
        }

        @media screen and (max-width: 768px) {
            width: 100%;
            margin-bottom: 10px; 
        }
    }
`;

// PriceName
export const PriceName = styled.div`
    width: 23%;
    text-align: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center; 
        margin-bottom: 5px; 
    }
`;

// Quantity
export const Quantity = styled.div`
    display: flex;
    width: 23%;
    align-items: center;

    .arrow {
        cursor: pointer;
        font-size: 20px;
        user-select: none; 
    }

    .value {
        margin: 0 10px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: center; 
        margin-bottom: 10px; 
    }
`;

// RemoveButton
export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
    font-size: 24px;

    @media screen and (max-width: 768px) {
        margin-top: 10px; 
        padding-left: 0;
        text-align: center;
    }
`;

// .checkout-item-container {
//     width: 100%;
//     display: flex;
//     min-height: 100px;
//     border-bottom: 1px solid darkgrey;
//     padding: 15px 0;
//     font-size: 20px;
//     align-items: center;

//     .image-container {
//         width: 23%;
//         padding-right: 15px;

//         img {
//             width: 100%;
//             height: 100%;
//         }
//     }

    // .name,
    // .quantity,
    // .price {
    //     width: 23%;
    // }

//     .quantity {
//         display: flex;
//         width: 23%;

//         .arrow {
//             cursor: pointer;
//         }

//         .value {
//             margin: 0 10px;
//         }
//     }

//     .remove-button {
//         padding-left: 12px;
//         cursor: pointer;
//     }
// }