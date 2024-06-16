import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    nameError: '',
    emailError: '',
    messageError: '',
  });

  const validateForm = () => {
    let valid = true;
    const errors = {
      nameError: '',
      emailError: '',
      messageError: '',
    };

    if (formData.name.trim() === '') {
      errors.nameError = 'Name is required';
      valid = false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.emailError = 'Email is invalid';
      valid = false;
    }

    if (formData.message.trim() === '') {
      errors.messageError = 'Message is required';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log('Form submitted:', formData);
      // Clear form after submission (if needed)
      setFormData({ name: '', email: '', message: '' });
    } else {
      console.log('Form has errors. Cannot submit.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-slate-950 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-white">Contact Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {formErrors.nameError && (
            <span className="text-red-500 text-sm">{formErrors.nameError}</span>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {formErrors.emailError && (
            <span className="text-red-500 text-sm">{formErrors.emailError}</span>
          )}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {formErrors.messageError && (
            <span className="text-red-500 text-sm">{formErrors.messageError}</span>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 px-4 mt-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
