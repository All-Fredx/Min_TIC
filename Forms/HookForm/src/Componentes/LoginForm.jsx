import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const valSubmit = (data) => console.log(data);

  return (
    <div className="border rounded p-4 custom-shadow" >
      <h2 className="text-center">Inicio de sesion</h2>
      <form onSubmit={handleSubmit(valSubmit)}>
        <div className="mb-3">
          <label className="fw-bold">E-mail address</label>
          <input
            className="form-control"
            {...register("correo", {
              required: "This e-mail is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter your E-mail Adress"
          />
          {errors.correo && (
            <span className="text-danger">{errors.correo.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label className="fw-bold">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              {...register("contraseña", {
                required: "This password is required",
                minLength: {
                  value: 12,
                  message: "Password must be at least 12 characters long",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^_&*])/,
                  message: "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character",
                },
              })}
              placeholder="Enter your Password"
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {errors.contraseña && (
            <span className="text-danger">
              {errors.contraseña.message}
            </span>
          )}
        </div>
        <div className="d-flex flex-column mt-4">
          <button className="btn btn-primary">Iniciar Sesion</button>
        </div>
      </form>
      <div className="mt-3">
        <a href="/register">Registrate</a>
      </div>
    </div>
  );
};

export default LoginForm;
