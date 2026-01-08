import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

export const FormikAbstraction = () => {
  return (
    <div>
      <h2>Formik Yup Abstraction Tutorial</h2>
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
            <MyTextInput label="First name" name="firstName" placeholder="First name" />
            <MyTextInput label="Last name" name="lastName" placeholder="Last name" />
            <MyTextInput
              label="Email adress"
              name="email"
              type="email"
              placeholder="example@test.com"
            />

            <MySelect label="Job type" name="jobType">
              <option value="NotSelected">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </MySelect>

            <MyCheckbox label="Terms and conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
