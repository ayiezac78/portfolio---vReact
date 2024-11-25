import { Link } from "react-router";

const Footer = () => {
	return (
		<footer>
			<ul className="flex items-center justify-center gap-3">
				<li>
					<Link
						to="https://www.linkedin.com/in/ayie"
						rel="noopener noreferrer"
						target="_blank"
						className="text-sm text-muted-foreground"
					>

						linkedin
					</Link>
				</li>
				<li>
					<Link
						to="https://github.com/ayiezac78"
						rel="noopener noreferrer"
						target="_blank"
						className="text-sm text-muted-foreground"
					>

						github
					</Link>
				</li>
				<li>
					<Link
						to="https://www.instagram.com/yieogainam"
						rel="noopener noreferrer"
						target="_blank"
						className="text-sm text-muted-foreground"
					>

						instagram
					</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
