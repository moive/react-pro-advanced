import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import reactLogo from "../assets/react.svg";
import { showActive } from "../helpers/showActive";

export const Navigation = () => {
	return (
		<>
			<BrowserRouter>
				<div className="main-layout">
					<nav>
						<img src={reactLogo} alt="React Logo" width={100} />
						<ul>
							<li>
								<NavLink to="/" className={showActive}>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/about" className={showActive}>
									About us
								</NavLink>
							</li>
							<li>
								<NavLink to="/users" className={showActive}>
									Users
								</NavLink>
							</li>
						</ul>
					</nav>
					<Routes>
						<Route path="/" element={<h1>Home page</h1>} />
						<Route path="about" element={<h1>About page</h1>} />
						<Route path="users" element={<h1>Users page</h1>} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
};
