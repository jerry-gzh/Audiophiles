import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import './scss/login.scss';

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
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
      await signup(user.email, user.password);
      navigate("/");
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

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit} className="form-wrap">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@email.com"
          onChange={handleChange}
          className="input"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          className="input"
        />

        <button id="btn-form">Register</button>
      </form>

      <div id="link-user">
        <Link to="/login">I already have an account</Link>
      </div>
    </div>
  );
}
