import React, {useContext} from 'react';
import Router from 'next/router';
import Link from 'next/link';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import {FirebaseContext} from '../../firebase';
import Buscar from '../ui/Buscar';
import Nav from './Nav';
import Boton from '../ui/Boton';

const HeaderContainer = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px){
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.p`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
    cursor: pointer;
`;

const Header = () => {

    const{user, firebase} =  useContext(FirebaseContext);

    return ( 
        <header
            css={css`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem 0;
            `}
        >
            <HeaderContainer>
                <div
                    css={css`
                        display:flex;
                        align-items:center;
                    `}
                >
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>
                    
                    <Buscar />
                    <Nav/>
                </div>
                <div
                    css={css`
                        display:flex;
                        align-items: center;
                    `}
                >
                    {user?(
                        <>
                            <p
                            css={css`
                                margin-right: 2rem;
                            `}
                            >{user.displayName}</p>
                            <Boton
                                bgColor="true"
                                onClick={()=>{
                                    firebase.logout();
                                    Router.push('/login');
                                }}
                            >
                                Cerrar Sesión
                            </Boton>
                        </>
                    ):(
                        <>
                            <Link href="/login"> 
                                <Boton
                                    bgColor="true"
                                >Login</Boton>
                            </Link>
                            <Link href="/signup">
                                <Boton>Crear Cuenta</Boton>
                            </Link>
                        </>
                    )}
                </div>
            </HeaderContainer>
        </header>
     );
}
 
export default Header;