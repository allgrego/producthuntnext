import React, {useState} from 'react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import {css} from '@emotion/react';
import {Form, Field, InputSubmit, Error} from '../components/ui/Form';
import firebase from '../firebase'

// Validations
import useValidation from '../hooks/useValidation';
import validateLogin from '../validation/validateLogin';

// State inicial de form
const initial_state = {
    email: '',
    password: ''
};

const Login = () => {
    // Hook for creation error
    const [error, setError] = useState('');

    // Custom Hook for Validation with destructuring
    const {values, errors, handleSubmit, handleChange, handleBlur} = useValidation(
        initial_state, validateLogin, login);
    
    // Destructuring of values
    const {email, password} = values;

    async function login(){
        try {
            const user = await firebase.login(email,password);
            console.log(user);
            Router.push('/'); 

        } catch (error) {
            console.error('Hubo un error al autenticar al usuario ',error.message);
            setError(error.message);
        }
    }

    return ( 
        <div>
            <Layout>
                <>
                    {/* Title */}
                    <h1
                        css={css`
                            text-align: center;
                            margin-top: 5rem;
                        `}
                    >Iniciar Sesión</h1>
                    
                    {/* Form */}
                    <Form
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <Field>
                            {/* email */}
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Tu email"
                                value={email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Field>
                        
                        {/* Email Error */}
                        {errors.email && <Error>{errors.email}</Error>}

                        <Field>
                            {/* password */}
                            <label htmlFor="password">Contraseña:</label>
                            <input 
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Tu contraseña"
                                value={password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Field>

                        {/* Password Error */}
                        {errors.password && <Error>{errors.password}</Error>}

                        {/* General Error */}
                        {error && <Error>{error}</Error>}

                        <InputSubmit
                            type="submit"
                        >
                            Iniciar Sesión
                        </InputSubmit>
                        
                    </Form>
                </>
            </Layout>
            
        </div>
     );
}
 
export default Login;