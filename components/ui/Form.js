import styled from '@emotion/styled';

export const Form = styled.form`
    max-width: 600px;
    width: 95%;
    margin: 5rem auto 0 auto;

`;

export const Field = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;

    label{
        flex: 0 0 150px; /* crecer encoger widthEnFlexBox */
        font-size: 1.8rem;
    }

    input{
        flex: 1; /* toma todo el espacio */
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid var(--gris2);
    }
`;

export const InputSubmit = styled.button`
    background-color: var(--naranja);
    color: white;
    width: 100%;
    padding: 1.5rem;
    text-align: center;
    font-size: 1.8rem;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    font-family: 'PT sans', sans-serif;
    font-weight: 700;

    &:hover{
        cursor: pointer;
    }
`;

export const Error = styled.p`
    background-color: red;
    padding: 1rem;
    font-family: 'PT Sans',sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    color: white;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;
    border-radius: 5px;
`;