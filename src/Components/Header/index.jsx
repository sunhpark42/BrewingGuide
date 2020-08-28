import React, { useState } from 'react';
import {
    HeaderContainer, ToggleBar, Logo, MyPageIcon,
} from './style-Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header () {
    const [open, setOpen] = useState(false);
    return (
        <HeaderContainer>
            <ToggleBar open={open} setOpen={setOpen} />
            <Logo href="home">
                Brewing Guide
            </Logo>
            <MyPageIcon href="mypage">
                <FontAwesomeIcon icon={faUser} />
            </MyPageIcon>
        </HeaderContainer>
    );
}