
'use client'
import { useState } from 'react';
import { useEffect } from 'react';
import { supabase } from '../../supabase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Fetch session using correct Supabase method
    const session = supabase.auth.getSession();
    setSession(session);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Erreur de connexion:', error.message);
      } else {
        console.log('Utilisateur connecté:', user);
        // Redirect to protected page after successful login
        window.location.href = '/'; // Replace with your protected page's path
      }
    } catch (error) {
      console.error('Erreur pendant la connexion:', error.message);
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error('Erreur de déconnexion:', error.message);
      } else {
        console.log('Utilisateur déconnecté');
        // Redirect to login page after successful logout
        window.location.href = '/login'; // Replace with your login page's path
      }
    } catch (error) {
      console.error('Erreur pendant la déconnexion:', error.message);
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
