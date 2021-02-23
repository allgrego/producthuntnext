import React from 'react';
import Layout from '../components/layout/Layout';
import {css} from '@emotion/react';
import {Form, Field, InputSubmit, Error} from '../components/ui/Form';

// Validations
import useValidation from '../hooks/useValidation';
import validateCreateAccount from '../validation/validateCreateAccount';


const Signup = () => {

    const initial_state = {
        name: '',
        email: '',
        password: ''
    };

    // Custom Hook for Validation with destructuring
    const {values, errors, handleSubmit, handleChange, handleBlur} = useValidation(
        initial_state, validateCreateAccount, createAccount);
    
    // Destructuring of values
    const {name, email, password} = values;

    function createAccount(){
        console.log('Creando Cuenta...');
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
                    >Crear Cuenta</h1>
                    
                    {/* Form */}
                    <Form
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <Field>
                            {/* name */}
                            <label htmlFor="name">Nombre:</label>
                            <input 
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Tu nombre"
                                value={name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Field>

                        {/* Name Error */}
                        {errors.name && <Error>{errors.name}</Error>}

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

                        <InputSubmit
                            type="submit"
                        >
                            Crear Cuenta
                        </InputSubmit>
                        
                    </Form>
                </>
            </Layout>
            
        </div>
     );
}
 
export default Signup;