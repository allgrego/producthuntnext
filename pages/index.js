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

const Home = () => {

    const{user, firebase} =  useContext(FirebaseContext);

    return ( 
        <div>
            <Layout>
                <div
                    css={css`
                        height: 35rem;
                    `}
                >
                    <TituloContainer>
                        {user?(
                            <>
                                <h1>Hola, {user.displayName}</h1>
                            </>
                        ):(<>
                            <h1>Inicio</h1>
                        </>)}
                        
                    </TituloContainer>
                    <TextContainer>
                        {user?(
                            <>
                                <h3>
                                    ¡Has iniciado sesión exitosamente!
                                </h3>
                                <p>
                                    Como seguimos en construcción hasta ahora no hay mucho más que hacer.
                                    Si deseas puedes cerrar sesión y probar la creación de cuenta.
                                </p>
                            </>
                        ):(<>
                            <p>
                                Bienvenido a esta página de prueba hecha con NextJS y Firebase.
                                Puesto que nos encontramos en construcción puede usted únicamente <Link href="/login"><ShowLink>Iniciar Sesión</ShowLink></Link> o <Link href="/signup"><ShowLink>Crearse una Cuenta</ShowLink></Link>.
                            </p>
                            <p>
                                Si inicias sesión podrás ver más pestañas disponibles en la barra de navegación
                            </p>
                        </>)}
                    </TextContainer>
                </div>
            </Layout>
            
        </div>
     );
}
 
export default Home;