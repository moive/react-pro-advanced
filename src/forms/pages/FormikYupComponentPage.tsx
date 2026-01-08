import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikYupComponentPage = () => {
  return (
    <div>
      <h2>Formik Yup Component Tutorial</h2>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", terms: false, jobType: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required*"),
          lastName: Yup.string().max(10, "Must be 10 characters or less").required("Required*"),
          email: Yup.string()
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Invalid email address")
            .required("Required*"),
          // email: Yup.string().email("Invalid email address").required("Required*"),
          terms: Yup.boolean().isTrue("You must accept the terms and conditions"),
          // terms: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
          jobType: Yup.string()
            .required("Required*")
            .notOneOf(["NotSelected"], "Please select a job type"),
        })}
      >
        {() => (
          <Form noValidate>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job type</label>
            <Field name="jobType" as="select">
              <option value="NotSelected">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
