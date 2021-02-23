import React, {useContext} from 'react';
import Router from 'next/router';
import Link from 'next/link';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import Boton from '../ui/Boton';

const FooterContainer = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: auto;
    text-align: center;
    @media (min-width: 768px){
        display: flex;
        justify-content: space-between;
    }
`;

const FooterText = styled.p`
    font-size: small;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
`;

const Footer = () => {


    return ( 
        <footer
            css={css`
                border-top: 2px solid var(--gris3);
                padding: 1rem 0;
                margin-top: 5rem;
            `}
        >
            <FooterContainer>
                <div
                    css={css`
                        display:flex;
                        align-items:center;
                    `}
                >
                    <FooterText>Powered by NextJS & Firebase</FooterText>
                </div>
                <div
                    css={css`
                        display:flex;
                        align-items: center;
                    `}
                >   
                    
                    <p
                    css={css`
                        font-size:small; text-align: center;
                    `}
                    >Made By: <a href="https://github.com/allgrego"
                    target="_blank"
                    css={css`
                        color: var(--naranja);
                        border-bottom: 1px dotted var(--naranja);
                    `}
                    > Allgrego
                    </a></p>
                </div>
            </FooterContainer>
        </footer>
     );
}
 
export default Footer;