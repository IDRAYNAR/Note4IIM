import { useState } from 'react';
import { supabase } from '../../supabase';


const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');


   const handleLogin = async () => {
       const { data, error } = await supabase.auth.signInWithPassword({
           email,
           password,
       });


       if (error) {
           console.error('Error signing in:', error.message);
       } else {
           console.log('User signed in successfully:', data);
           // Redirect to the dashboard or any other page
       }
   };


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
       </div>
   );
}

export default Login;