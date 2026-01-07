import { ChangeEvent, FormEvent, useState } from "react";
import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const { formData, name, email, password, confirmPassword, onChange } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>RegisterPage</h1>
      <form noValidate onSubmit={(ev) => onSubmit(ev)}>
        <input type="text" placeholder="Name" value={name} onChange={onChange} name="name" />
        <input type="email" placeholder="Email" value={email} onChange={onChange} name="email" />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          name="password"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={onChange}
          name="confirmPassword"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
