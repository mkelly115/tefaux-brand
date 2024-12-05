// import styled from "styled-components";
// import { Link } from "react-router-dom";

// export const NavigationContainer = styled.div`
//     height: 70px;
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 25px;
// `
// export const LogoContainer = styled(Link)`
//     height: 100%;
//     width: 70px;
//     padding: 25px;
// `

// export const NavLinks = styled.div`
//         width: 50%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: flex-end;
// `

// export const NavLink = styled(Link)`
//         padding: 10px 15px;
//         cursor: pointer;
// `
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column; 
    height: auto; 
    margin-bottom: 15px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 100%; 
    justify-content: space-around; 
    padding: 10px 0;]
    font-size: 10px;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 5px 10px; 
  }
`;