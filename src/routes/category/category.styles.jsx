import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;

      @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr)
  }
`

export const Title = styled.div`
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
`

