import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Labrarys.css';

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (data) => {
    setSubmitting(true);
    console.log(data); 
    setTimeout(() => setSubmitting(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          {...register('firstName', {
            required: 'Please enter your first name',
            minLength: 3,
            maxLength: 50,
            message: 'First name must be between 3 and 50 characters',
          })}
        />
        {errors.firstName && <p className="error">{errors.firstName.message}</p>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          {...register('lastName', { required: 'Please enter your last name' })}
        />
        {errors.lastName && <p className="error">{errors.lastName.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Please enter your email',
            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/,
            message: 'Please enter a valid email',
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register('password', {
            required: 'Please enter your password',
            minLength: 8,
            message: 'Password must be at least 8 characters long',
          })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>
      <button type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Sign Up'}
      </button>
    </form>
  );
}

export default MyForm;
