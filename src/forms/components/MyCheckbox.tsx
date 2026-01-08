import { ErrorMessage, useField } from "formik";
interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: "checkbox" });
  // const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        <div className="label-checkbox">{label}</div>
      </label>
      <ErrorMessage name={props.name} component="span" />
      {/* {meta.touched && meta.error && <span className="error">{meta.error}</span>} */}
    </>
  );
};
