import {
	BrowserRouter,
	Navigate,
	NavLink,
	Route,
	Routes,
} from "react-router-dom";

import reactLogo from "../assets/react.svg";
import { showActive } from "../helpers/showActive";
import { routes } from "./routes";

export const Navigation = () => {
	return (
		<>
			<BrowserRouter>
				<div className="main-layout">
					<nav>
						<img src={reactLogo} alt="React Logo" width={100} />
						<ul>
							{routes.map((item) => (
								<li key={item.to}>
									<NavLink to={item.to} className={showActive}>
										{item.name}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
					<Routes>
						{routes.map(({ to, path, component: Component }) => (
							<Route key={to} path={path} element={<Component />} />
						))}

						<Route path="/*" element={<Navigate to="/lazy1" replace />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
};
