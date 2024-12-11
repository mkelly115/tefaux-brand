import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;
    }

    @media (max-width: 768px) {
        width: 100%;  
        padding: 20px; 
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start; 

    @media (max-width: 768px) {
        justify-content: center; 
        width: 100%; 
        margin-top: 20px; 
    }
`;