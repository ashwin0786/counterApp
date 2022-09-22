import React from 'react';
import styled from 'styled-components';

const BaseButton = styled.button`
    border: none;
    padding: 0.7rem 1rem;
    font-size: 1rem;
    background-color: #d4d6d8;
    color: #000;
    cursor: pointer;
`;

interface buttonProps {
    children: React.ReactNode;
    handleClick: () => void;
}

const Button: React.FC<buttonProps> = ({ children, handleClick }) => {
    return (
        <>
        <BaseButton onClick={handleClick}>{ children }</BaseButton>
        </>
    );
}


export default Button;