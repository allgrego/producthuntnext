import app from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from './config';

class Firebase{
    constructor(){
        //If there is no created application 
        if(!app.apps.length){
            // Initialize Firebase
        app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth();
    }

    // Create a user (Signup)
    async createUser(name, email, password){
        const newUser = await this.auth.createUserWithEmailAndPassword(email,password);

        return newUser.user.updateProfile({
            displayName: name
        });
    }

    // Login
    async login(email,password){
        return await this.auth.signInWithEmailAndPassword(email,password);
    }

    // Logout
    async logout(){
        await this.auth.signOut();
    }
}

const firebase = new Firebase();
export default firebase;