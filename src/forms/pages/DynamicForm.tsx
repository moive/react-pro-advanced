import { Form, Formik } from "formik";
import * as Yup from "yup";

import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input?.validations) continue;
  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required(`${input.label} is required`);
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `This field must be at least ${(rule as any).value || 2} characters`
      );
    }
    if (rule.type === "email") {
      schema = schema.email("Invalid email format");
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h2>Dynamic Form</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form noValidate>
            {formJson.map(({ name, label, placeholder, type, options = [] }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect name={name} key={name} label={label}>
                    <option value="no-select">Choose an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              throw new Error(`Type ${type} not supported`);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
