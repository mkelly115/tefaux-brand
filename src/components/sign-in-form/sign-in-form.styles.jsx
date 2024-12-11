import styled from "styled-components";

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2{
        margin: 10px 0;
    }
          @media (max-width: 768px) {
            width: 100%; 
            padding: 20px;
        }
`
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px) {
        flex-direction: column; 
        align-items: center; 
        gap: 15px; 

        button {
            width: 80%; 
        }
    }
`;

