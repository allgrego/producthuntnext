import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Navigator = styled.nav`
    padding-left: 2rem;

    a{
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--gris2);
        font-family: 'PT sans', serif;
        
        &:last-of-type{
            margin-right: 0;
        }
    }
`;

const Nav = () => {
    return ( 
        <Navigator>
            <Link href="/"> Inicio </Link>
            <Link href="/populares"> Populares </Link>
            <Link href="/nuevo-producto"> Nuevo Producto </Link>
        </Navigator>
     );
}
 
export default Nav;