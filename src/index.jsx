import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Layout from "./components/layout/layout";
import reportWebVitals from './reportWebVitals';

import Main from "./pages/Main";
import Login from "./pages/Login";
import Help from "./pages/Help";

ReactDOM
.createRoot(document.getElementById('root'))
.render(
	<React.StrictMode>
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Main/>}/>
					<Route path="help" element={<Help/>}/>
					<Route path="login" element={<Login/>}/>
				</Routes>
			</Layout>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
