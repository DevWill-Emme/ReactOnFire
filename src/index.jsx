import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes,} from "react-router-dom";

import Index from "./components/Layout";
import reportWebVitals from './reportWebVitals';

import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/Register";
import Test from "./pages/Test";

import ThemeProvider from "react-bootstrap/ThemeProvider";
import 'bootstrap/dist/css/bootstrap.min.css';

//Firebase
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// Initialize Firebase
const app = initializeApp({
	apiKey: "AIzaSyCMqiA9jLHYal2sK5WQE00JMEkg_hWlCf8",
	authDomain: "react-on-fire-9e246.firebaseapp.com",
	databaseURL: "https://react-on-fire-9e246-default-rtdb.firebaseio.com",
	projectId: "react-on-fire-9e246",
	storageBucket: "react-on-fire-9e246.appspot.com",
	messagingSenderId: "386932516273",
	appId: "1:386932516273:web:d1cb9e961e826da42a4990",
	measurementId: "G-VCSZ70B570"
});
const auth = getAuth()


ReactDOM
	.createRoot(document.getElementById('root'))
	.render(
		<React.StrictMode>
			<BrowserRouter>
				<ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
					<Index>
						<Routes>
							<Route path="/" element={<Main/>}/>
							<Route path="login" element={<Login/>}/>
							<Route path="signup" element={<SignUp/>}/>
							<Route path="test" element={<Test/>}/>
						</Routes>
					</Index>
				</ThemeProvider>
			</BrowserRouter>
		</React.StrictMode>
	);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
