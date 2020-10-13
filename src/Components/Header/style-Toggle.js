import styled from "styled-components";

export const ToggleContainer = styled.div`
    @media screen and (max-width: 1440px) {
        width: 300px;
    }
    @media screen and (max-width:600px) {
        width: 100%;
    }
    // width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #fefefe;
    transform: ${({open}) => (open ? 'translateY(0)' : 'translateY(100%)')};
    border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

export const ToggleComponents = styled.ul`
    height: 100vh;
    background-color: #fefefe;

`;

export const ToggleComponent = styled.li`
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    font-size: 16px;
    font-weight: 500;
    padding: 15px 5%;
    justify-content: center;
    &:hover {
        background-color: #390d69;
        color: #ffffff;
    }
    @media screen and (max-width: 1440px) {
        padding: 10px 50px;
        font-size: 14px;
    }
    @media screen and (max-width:600px) {
        padding : 10px 5%
    }
`;