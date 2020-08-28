import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 48px;
    background-color: #fefefe;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const ToggleBar = styled.div`
    witdh: 32px;
    background: none;
    color: #000000;
    text-decoration: none;
    &:hover {
        color : orange;
    }
`;

export const Logo = styled.a`
    font-family: 'Black Han Sans';
    text-decoration: none;
    color: #333333
`;

export const MyPageIcon = styled.a`
    witdh: 32px;
    background: none;
    color: #000;
    text-decoration: none;
    &:hover {
        color : orange;
    }
`;