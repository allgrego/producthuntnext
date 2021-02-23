import React,{useContext} from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import {FirebaseContext} from '../../firebase';

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
    const{user} =  useContext(FirebaseContext);

    return ( 
        <Navigator>
            <Link href="/"> Inicio </Link>
            {user&&<Link href="/populares"> Populares </Link>}
            {user&&<Link href="/nuevo-producto"> Nuevo Producto </Link>}
        </Navigator>
     );
}
 
export default Nav;