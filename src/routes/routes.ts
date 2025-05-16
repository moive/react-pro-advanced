import { JSX, lazy, LazyExoticComponent } from "react";
// import { Lazyload2, Lazyload3 } from "../lazyload/pages";
import { Lazyload1 } from "../lazyload/pages/Lazyload1";

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

export const routes: Route[] = [
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
