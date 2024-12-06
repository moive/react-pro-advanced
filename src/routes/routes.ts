import { JSX } from "react";
import { Lazyload2, Lazyload3 } from "../lazyload/pages";
import { Lazyload1 } from "../lazyload/pages/Lazyload1";
interface Route {
	to: string;
	path: string;
	component: () => JSX.Element;
	name: string;
}

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
		component: Lazyload2,
		name: "Lazy-2",
	},
	{
		to: "/lazy3",
		path: "lazy3",
		component: Lazyload3,
		name: "Lazy-3",
	},
];
