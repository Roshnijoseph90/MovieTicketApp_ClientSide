// src/LoginPage.js
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can handle the form submission logic here, e.g., make an API request
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        {/* Email Field */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { 
              required: 'Email is required', 
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', { 
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long'
              }
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
