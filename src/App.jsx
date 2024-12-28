import { useState } from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { Home, Exp, Projects, About, Main } from "./Pages/index.js";
import "@fontsource/josefin-sans/200.css"; // Light
import "@fontsource/josefin-sans/400.css"; // Regular weight
import "@fontsource/josefin-sans/700.css"; // Bold weight

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/experience" element={<Exp />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
