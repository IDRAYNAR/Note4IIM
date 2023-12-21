import { useState, useEffect } from 'react';
import { supabase } from '../supabase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Vérifier si l'utilisateur est déjà connecté au chargement de la page
        const session = supabase.auth.getSession;
        if (session) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithPassword
        ({
            email,
            password,
        });
        window.location.href ="/"
        if (error) {
            console.error('Error signing in:', error.message);
        } else {
            console.log('User signed in successfully:', data);
            setIsLoggedIn(true);
        }
    };

    const handleSignOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) {
                throw error;
            }
            console.log('User signed out successfully');
            setIsLoggedIn(false); // Mettre à jour l'état de connexion à false après la déconnexion
        } catch (error) {
            console.log('Error signing out:', error);
        }
    };

    const renderSignOutButton = isLoggedIn ? <button onClick={handleSignOut}>Sign Out</button> : null;

    return (
        <div>
            <h1>Login Page</h1>
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
            <button onClick={handleLogin}>Login</button>
            {renderSignOutButton}
        </div>
    );
};

export default Login;

