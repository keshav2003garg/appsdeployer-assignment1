import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/404';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/job/:id" element={<Details />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	)
}
