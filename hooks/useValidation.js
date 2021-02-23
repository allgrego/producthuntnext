import React, {useState,useEffect} from 'react';

const useValidation = (initialState, validate, func) => {
    const[values, setValues ] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [submitForm, setSubmitForm] = useState(false);
    
    useEffect(()=>{
        if(submitForm){
            const noErrors = Object.keys(errors).length === 0;

            if(noErrors){
                func(); // Función que se ejecuta en el componente
            }
            setSubmitForm(false);
        }
    },[errors]);

    // Función que se ejecuta cuando el usuario escribe algo
    const handleChange = e =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value,


        })
    };

    // Función que se ejecuta cuando el usuario hace submit
    const handleSubmit = e =>{
        e.preventDefault();
        const errorsValidation = validate(values);
        setErrors(errorsValidation);
        setSubmitForm(true);
    }

    // Cuando se realiza evento de blur
    const handleBlur = () =>{
        const errorsValidation = validate(values);
        setErrors(errorsValidation);
    }

    return {
        values,
        errors,
        handleSubmit,
        handleChange,
        handleBlur
    };
}
 
export default useValidation;