import { supabase } from '../supabase';
import { useState } from 'react';

export const handleSignOut = async () => {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) {
            throw error;
        }
        console.log('User signed out successfully');
    } catch (error) {
        console.log('Error signing out:', error);
    }
};

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSignUp = async () => {
        try {
            const { data, error } = await supabase.auth.signUp({ email, password });
            localStorage.setItem('signupEmail', email);
            window.location.href = '/profil'
            if (error) {
                throw error;
            }
            setIsLoggedIn(true);
            console.log('User signed up:', data);
        } catch (error) {
            console.log('Error signing up:', error);
        }
    };

    const renderSignOutButton = isLoggedIn ? <button onClick={handleSignOut}>Sign Out</button> : null;

    return (
        <div className="creditential">
            <h1>Inscription</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className='buttonContainer'>
            <button onClick={handleSignUp}>S'inscrire</button>
            </div>
            {renderSignOutButton}
        </div>
    );
};




export default Register;




