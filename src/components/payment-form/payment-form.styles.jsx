import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center

    @media (max-width: 768px) {
      display: flex;
        align-items: center;
  
    }
`

export const FormContainer = styled.form`
height:100px;
min-width: 400px;
    @media (max-width: 768px) {
    min-width: 100px;
  }
`

export const PaymentButton = styled(Button)`
margin-left: auto;
margin-top: 30px;
    @media (max-width: 768px) {
    margin: auto;
    padding: 20px;
  }
`