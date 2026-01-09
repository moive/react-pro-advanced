import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("This field is required *")
            .min(2, "Name must be at least 2 characters")
            .max(20, "Name must be 20 characters or less"),
          email: Yup.string().required("Email is required *").email("Email is invalid"),
          password: Yup.string()
            .required("Password is required *")
            .min(6, "Min lenght is 6 characters"),
          confirmPassword: Yup.string()
            .required("Confirm password is required *")
            .oneOf([Yup.ref("password")], "Passwords must match"),
        })}
      >
        {({ handleReset }) => (
          <Form noValidate>
            <MyTextInput name="name" label="" placeholder="Name" />
            <MyTextInput name="email" type="email" label="" placeholder="example@test.com" />
            <MyTextInput name="password" type="password" label="" placeholder="Password" />
            <MyTextInput
              name="confirmPassword"
              type="password"
              label=""
              placeholder="Confirm Password"
            />

            <button type="submit">Create</button>
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
