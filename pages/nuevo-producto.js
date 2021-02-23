import React,{useContext} from 'react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import {TituloContainer} from '../components/ui/Titulo'
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import {FirebaseContext} from '../firebase';

const TextContainer = styled.div`
    max-width: 600px;
    width: 90%;
    min-height: 20rem;
    border:1px solid var(--gris3);
    border-radius: 5px;
    background-color: #e1e1e155;
    margin: 5rem auto 0 auto;
    padding: 1rem 2rem;
    
    p{
        text-align: justify;
        text-indent: 2rem;
        font-family: 'PT Sans', sans-serif;

    }
`;

const ShowLink= styled.span`
    color: var(--naranja);
    border-bottom: 1px solid var(--gris2);
    &:hover{
        cursor: pointer;
    }
`;

const NuevoProducto = () => {

    const{user} =  useContext(FirebaseContext);

    return ( 
        <div>
            <Layout>
                <div
                    css={css`
                        height: 35rem;
                    `}
                >
                    <TituloContainer>
                        <h1>Agregar Nuevo Producto</h1>
                    </TituloContainer>
                    <TextContainer>
                        {user?(
                            <>
                                <h3>
                                    Ten calma, {user.displayName}.
                                </h3>
                                <p>
                                    Pronto podrás agregar nuevos productos.
                                </p>
                            </>
                        ):(<>
                            <p>
                                En construcción...
                            </p>
                        </>)}
                    </TextContainer>
                </div>
            </Layout>
            
        </div>
     );
}
 
export default NuevoProducto;