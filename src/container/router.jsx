import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

//Routes
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/Register";
import Test from "../pages/Test";
import Layout from "../components/Layout";
import ResetPass from "../pages/Login/ResetPass";
import {TCV} from "../pages/testing components Views";


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
						<Route path="login/reset_password" element={<ResetPass/>}/>
						<Route path="TCV" element={<TCV/>}/>
					</Routes>
				</Layout>
			</BrowserRouter>
		</>
	)
}