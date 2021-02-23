import React, {useState,useEffect} from 'react';
import firebase from '../firebase';

const useAuthentication = () => {
    const[authenticatedUser, setAuthenticatedUser ] = useState(null);
       
    useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged(authenticatedUser => {
            // Si hay usuario lo guarda en state, si no, es null
            if(authenticatedUser){
                setAuthenticatedUser(authenticatedUser);
            }else{
                setAuthenticatedUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    return authenticatedUser;
}
 
export default useAuthentication;