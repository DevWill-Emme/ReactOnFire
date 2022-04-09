import "./style.css"
import {Link} from "react-router-dom";

export default function Layout(props) {
	return (
		<>
			<div className="container">
				<div className="bar">
					<div className="title">
						<h1>ReactOnFire</h1>
					</div>
					<div className="buttons">
						<Link to="/">
							<button>Home</button>
						</Link>
						<Link to="/help">
							<button>Help</button>
						</Link>
						<Link to="/login">
							<button>Login</button>
						</Link>
					</div>
				</div>
				<div className="page">{props.children}</div>
			</div>
		</>
	)
};