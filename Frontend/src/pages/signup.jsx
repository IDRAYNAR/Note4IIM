import { useState } from 'react';
import { supabase } from '../components/Server/supabase';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSignUp = async () => {
        try {
            const { data, error } = await supabase.auth.signUp({ email, password });
            if (error) {
                throw error;
            }
            // Handle successful signup
            console.log('User signed up:', data);
        } catch (error) {
            console.log('Error signing up:', error);
        }
    };


    return (
        <div>
            <h2>Sign Up</h2>
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
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};


export default SignUp;
