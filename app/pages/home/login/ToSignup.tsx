import { useState } from 'react';
import zxcvbn from 'zxcvbn';

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

const ToSignup = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    // Clear the associated error when input changes
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validation logic
    const newErrors: Partial<FormData> = {};
    // Email validation regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    } else if (!formData.email.endsWith('.com')) {
      newErrors.email = 'Email must end with ".com"';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    // Check if there are any errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If no errors, proceed with form submission logic
      // TODO: Submit data to the server
    }
  };

  const passwordStrength = zxcvbn(formData.password).score;

  return (
  <div className="w-64 mx-auto mt-10">
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </label>
      <label className="block">
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2 mt-1"
        />
      </label>
      <label className="block">
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2 mt-1"
        />
      </label>
      <label className="block">
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2 mt-1"
        />
      </label>
      <label className="block">
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2 mt-1"
        />
      </label>
      {formData.password && (
          <div>
            Password Strength:
            {passwordStrength === 0 && <span style={{ color: 'red' }}>Weak</span>}
            {passwordStrength === 1 && <span style={{ color: 'orange' }}>Medium</span>}
            {passwordStrength >= 2 && <span style={{ color: 'green' }}>Strong</span>}
          </div>
        )}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Sign Up
      </button>
    </form>
  </div>
  );
}

export default ToSignup;