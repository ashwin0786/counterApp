import React from 'react';
import styled from 'styled-components';

import data from '../config/data.json';


const Header = styled.header`
  background-color: #000;
  text-align: center;
  padding: 1rem 2rem;
`;

const Title = styled.h1`
  color: #f4f4f4;
  font-size: 1rem;
`;

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Header><Title>{data.headerText}</Title></Header>
            {children}
        </>
    );
}

export default Layout;