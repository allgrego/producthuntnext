export default function validateLogin(values){
    let errors ={};

    // validate email
    if(!values.email){
        errors.email = 'El email es obligatorio';
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'Email inválido';
    }

    // validate password
    if(!values.password){
        errors.password = 'La contraseña es obligatoria'
    }else if(values.password.length < 6){
        errors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    return errors;
}   