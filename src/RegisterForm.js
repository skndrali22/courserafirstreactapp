import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "Skndr",
    lastName: "Ali",
    email: "skndrshaikh17c@gmail.com",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value, 
    });
  }

  return (
    <>
      <label>
        First name:
        <input name="firstName" value={form.firstName} onChange={handleChange} />
      </label>
      <label>
        Last name:
        <input name="lastName" value={form.lastName} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input name="email" value={form.email} onChange={handleChange} />
      </label>
      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
    </>
  );
}
