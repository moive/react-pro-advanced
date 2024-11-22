import {
	BrowserRouter,
	Navigate,
	NavLink,
	Route,
	Routes,
} from "react-router-dom";

import reactLogo from "../assets/react.svg";
import { showActive } from "../helpers/showActive";
import { Lazyload1, Lazyload2, Lazyload3 } from "../lazyload/pages/";

export const Navigation = () => {
	return (
		<>
			<BrowserRouter>
				<div className="main-layout">
					<nav>
						<img src={reactLogo} alt="React Logo" width={100} />
						<ul>
							<li>
								<NavLink to="/lazy1" className={showActive}>
									Lazy 1
								</NavLink>
							</li>
							<li>
								<NavLink to="/lazy2" className={showActive}>
									Lazy 2
								</NavLink>
							</li>
							<li>
								<NavLink to="/lazy3" className={showActive}>
									Lazy 3
								</NavLink>
							</li>
						</ul>
					</nav>
					<Routes>
						<Route path="lazy1" element={<Lazyload1 />} />
						<Route path="lazy2" element={<Lazyload2 />} />
						<Route path="lazy3" element={<Lazyload3 />} />
						<Route path="/*" element={<Navigate to="/lazy1" replace />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
};
