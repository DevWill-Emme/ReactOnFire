import * as React from 'react';
import {useEffect} from 'react';
import ThemeProvider from "react-bootstrap/ThemeProvider";
import 'bootstrap/dist/css/bootstrap.min.css';

import AppRouter from "./router";

// noinspection ES6UnusedImports
import firebase from "../firebase-config";
import TrackAuth from "./auth";

export default function App() {
	useEffect(() => {
			TrackAuth()
		}
	)
	return (
		<>
			<ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
				<AppRouter/>
			</ThemeProvider>
		</>
	)
}