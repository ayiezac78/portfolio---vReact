import { useRouteError, Link } from "react-router";

interface RouteError {
	status: number;
	statusText: string;
}
const NotFound = () => {
	const error = useRouteError() as RouteError;

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>
				{error
					? `${error.status} ${error.statusText}`
					: "Sorry, an unexpected error has occurred."}
			</p>
			<Link to={"/"}>Home</Link>
		</div>
	);
};

export default NotFound;
