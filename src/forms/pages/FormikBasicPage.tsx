import { useFormik } from "formik";
import "../styles/styles.css";

export const FormikBasicPage = () => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: { firstName: "", lastName: "", email: "" },
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <div>
      <h2>Formik Basic Tutorial</h2>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" onChange={handleChange} value={values.firstName} />
        <span>First name is required *</span>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" onChange={handleChange} value={values.lastName} />
        <span>Last name is required *</span>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleChange} value={values.email} />
        <span>Email is required *</span>
        <span>Email is invalid</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
