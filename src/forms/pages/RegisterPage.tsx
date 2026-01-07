import { ChangeEvent, FormEvent, useState } from "react";
import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const { formData, onChange, reset, name, email, password, confirmPassword, isValidEmail } =
    useForm({
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
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChange}
          name="name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>This field is required *</span>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          name="email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Email is required *</span>}
        {!isValidEmail(email) && <span>Email is invalid</span>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          name="password"
          className={`${password.trim().length <= 0 && "has-error"}`}
        />
        {password.trim().length <= 0 && <span>This field is required *</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>Lenght min is 6 characters</span>
        )}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={onChange}
          name="confirmPassword"
          className={`${confirmPassword.trim().length <= 0 && "has-error"}`}
        />
        {confirmPassword.trim().length <= 0 && <span>This field is required *</span>}
        {confirmPassword.trim().length > 0 && confirmPassword !== password && (
          <span>Password does not match</span>
        )}
        <button type="submit">Create</button>
        <button type="reset" onClick={reset}>
          Reset
        </button>
      </form>
    </div>
  );
};
