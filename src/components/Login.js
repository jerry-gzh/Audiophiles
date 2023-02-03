import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import './scss/login.scss';

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    //🤖 Actualiza el estado
    setUser({ ...user, [name]: value });
    //console.log(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate("/ShopingCart");
    } catch (error) {
      console.log(error.code);
      if(error.code === "auth/invalid-email"){ //Se puede agregar validaciones
        setError('Correo invalido 😐')
      }
      //setError(error.message);
    }
  };

  return (
    <div>

      {error && <div id="error">{error}</div>}

      <form onSubmit={handleSubmit} className="form-wrap">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="you@email.com"
          onChange={handleChange}
          className="input"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          className="input"
        />

        <button id="btn-form">Login</button>
      </form>
      
      <div id="link-user">
        <Link to="/register">Create Account</Link>
      </div>
    </div>
  );
}
