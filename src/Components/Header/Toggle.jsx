import React from 'react';
import { ToggleContainer, ToggleComponents, ToggleComponent } from './style-Toggle';

export default function Toggle () {
    return (
        <>
            <ToggleContainer>
                <ToggleComponents>
                    <ToggleComponent>맥주 재료 가이드</ToggleComponent>
                    <ToggleComponent>국내 양조장 목록</ToggleComponent>
                    <ToggleComponent>맥주 레시피 작성</ToggleComponent>
                </ToggleComponents>
            </ToggleContainer>
        </>
    );
}