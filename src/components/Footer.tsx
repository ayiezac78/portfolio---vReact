import { Github, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
	return (
		<>
			<footer>
				<ul className="flex items-center justify-center gap-3">
					<li>
						<Link
							to="https://www.linkedin.com/in/ayie"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Linkedin className="h-[1.2rem] w-[1.2rem]" />
						</Link>
					</li>
					<li>
						<Link
							to="https://github.com/ayiezac78"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Github className="h-[1.2rem] w-[1.2rem]" />
						</Link>
					</li>
					<li>
						<Link
							to="https://www.instagram.com/yieogainam"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Instagram className="h-[1.2rem] w-[1.2rem]" />
						</Link>
					</li>
				</ul>
			</footer>
		</>
	);
};

export default Footer;
