import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes,} from "react-router-dom";

import Layout from "./components/layout/layout";
import reportWebVitals from './reportWebVitals';

import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/Register";

import ThemeProvider from "react-bootstrap/ThemeProvider";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM
.createRoot(document.getElementById('root'))
.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
				<Layout>
					<Routes>
						<Route path="/" element={<Main/>}/>
						<Route path="login" element={<Login/>}/>
						<Route path="signup" element={<SignUp/>}/>
					</Routes>
				</Layout>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
