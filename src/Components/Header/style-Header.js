import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Toggle from './Toggle';

export const HeaderContainer = styled.div`
    position: fixed;
    box-sizing: border-box;    
    width: 100%;
    height: 48px;
    background-color: #fefefe;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    // justify-content: space-around;
`;

const HeaderButton = styled.button`
    position: fixed;
    color: #390d69;
    background-color: rgba(0,0,0,0);
    box-sizing: border-box;
    font-size: 24px;
    margin-left: 5%;
    outline: none;
    border: none;
`;

export const ToggleBar = ({ open, setOpen }) =>  {
    return (
        <>
            <HeaderButton onClick={() => setOpen(!open)}>
                <FontAwesomeIcon icon={faBars} />
            </HeaderButton>
            {open ? <Toggle /> : <></>}
        </>
    );
}

export const Logo = styled.a`
    font-family: 'Black Han Sans';
    text-decoration: none;
    color: #390d69;
    position: absolute;
    text-align: center;
    left : 30%;
    right: 30%;
`;

export const MyPageIcon = styled.a`
    witdh: 32px;
    font-size: 24px;
    background: none;
    color: #390d69;
    text-decoration: none;
    &:hover {
        color : #555555;
    }
    position: absolute;
    right: 5%;
`;