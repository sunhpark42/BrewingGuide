import React from 'react';
import {
    HeaderContainer, ToggleBar, Logo, MyPageIcon,
} from './style-Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header () {
    return (
        <>
            <HeaderContainer>
                <ToggleBar>
                    <FontAwesomeIcon icon={faBars} />
                </ToggleBar>
                <Logo href="home">
                    Brewing Guide
                </Logo>
                <MyPageIcon href="mypage">
                    <FontAwesomeIcon icon={faUser} />
                </MyPageIcon>
            </HeaderContainer>
        </>
    );
}