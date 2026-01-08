import { JSX, lazy, LazyExoticComponent } from "react";
// import { Lazyload2, Lazyload3 } from "../lazyload/pages";
import { Lazyload1 } from "../lazyload/pages/Lazyload1";
import { RegisterPage } from "../forms/pages/RegisterPage";
import { FormikBasicPage } from "../forms/pages/FormikBasicPage";
import { FormikYupPage } from "../forms/pages/FormikYupPage";

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const lazy1 = lazy(() => import("../lazyload/pages/Lazyload1"));
const lazy2 = lazy(() => import("../lazyload/pages/Lazyload2"));
const lazy3 = lazy(() => import("../lazyload/pages/Lazyload3"));
const shopping = lazy(() => import("../patterns/pages/ShoppingPage"));

export const routes: Route[] = [
  {
    to: "/FormikYup",
    path: "formikYup",
    component: FormikYupPage,
    name: "Formik Yup",
  },
  {
    to: "/FormikBasic",
    path: "formikBasic",
    component: FormikBasicPage,
    name: "Formik Basic",
  },
  {
    to: "/Register",
    path: "register",
    component: RegisterPage,
    name: "Register",
  },
  {
    to: "/shopping",
    path: "shopping",
    component: shopping,
    name: "Shopping Store",
  },
  {
    to: "/lazy1",
    path: "lazy1",
    component: Lazyload1,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    component: lazy2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    component: lazy3,
    name: "Lazy-3",
  },
];
