import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);
  };

  const valSubmit = (data) => {
    const countryName = document.querySelector('select[name="country"] option:checked').text;
    const formData = { ...data, phone:`+${selectedCountry} ${data.phone}`,country: countryName};
    console.log(formData);}

  return (
    <div className="border rounded p-4 custom-shadow">
      <h2 className="text-center">Registro</h2>
      <form onSubmit={handleSubmit(valSubmit)}>
      <div className="mb-3">
          <label className="fw-bold">Nombres</label>
          <input
            className="form-control"
            {...register("name", {
              required: "Enter your Names",
              pattern: {
                value:
                    /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
                message: "Enter a valid Names",
              },
            })}
            placeholder="Enter your Names"
          />
          {errors.name && (
            <span className="text-danger">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label className="fw-bold">Apellidos</label>
          <input
            className="form-control"
            {...register("lastname", {
              required: "Enter your Last Names",
              pattern: {
                value:
                    /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
                message: "Enter a valid Last Names",
              },
            })}
            placeholder="Enter your Last Names"
          />
          {errors.lastname && (
            <span className="text-danger">{errors.lastname.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label className="fw-bold">E-mail address</label>
          <input
            className="form-control"
            {...register("correo", {
              required: "Enter your E-mail Address",
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Enter a valid E-mail Address",
              },
            })}
            placeholder="Enter your E-mail Address"
          />
          {errors.correo && (
            <span className="text-danger">{errors.correo.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label className="fw-bold">Direccion</label>
          <input
            className="form-control"
            {...register("address", {
              required: "Enter your Address",
              pattern: {
                value:
                    /^[A-Za-z0-9\s#.,-]+$/,
                message: "Enter a valid Address",
              },
            })}
            placeholder="Enter your Address"
          />
          {errors.address && (
            <span className="text-danger">{errors.address.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label className="fw-bold m-2">Pais</label>
          <select className="" 
            {...register("country", {
                required: "Select your Country",
            })} onChange={handleCountryChange}>
            <option value="">Seleccione un país</option>
            <option value="34">España</option>
            <option value="57">Colombia</option>
            <option value="58">Venezuela</option>
            <option value="1">Estados Unidos</option>
          </select>
        </div>
        {errors.country && (
            <span className="text-danger">{errors.country.message}</span>
          )}
        <div className="mb-3">
          <label className="fw-bold">Número de Celular</label>
          <div className="input-group ">
            <input
                type="text"
                className="form-control bg-light"
                readOnly
                value={selectedCountry ? `+${selectedCountry}` : ""}
            />
            <input
              type="text"
              className="form-control w-75"
              {...register("phone", {
                required: "Enter your Phone Number",
                pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter only numbers",
                  },
                  minLength: {
                    value: 7,
                    message: "Phone number must be at least 7 digits",
                  },
                  maxLength: {
                    value: 10,
                    message: "Phone number must not exceed 10 digits",
                  },
              })}
              placeholder="Enter your Phone Number"
              inputMode="numeric"
            />
          </div>
          {errors.phone && (
            <span className="text-danger">{errors.phone.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label className="fw-bold">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              {...register("contraseña", {
                required: "Enter your Password",
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
          <button className="btn btn-primary">Registrarme</button>
        </div>
      </form>
      <div className="mt-3">
        <a href="/">Loguin</a>
      </div>
    </div>
  );
};

export default RegisterForm;
