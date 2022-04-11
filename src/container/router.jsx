import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

//Routes
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/Register";
import Test from "../pages/Test";
import Layout from "../components/Layout";


export default function AppRouter() {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Main/>}/>
						<Route path="login" element={<Login/>}/>
						<Route path="signup" element={<SignUp/>}/>
						<Route path="test" element={<Test/>}/>
					</Routes>
				</Layout>
			</BrowserRouter>
		</>
	)
}