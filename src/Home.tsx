import IntroSection from "./components/IntroSection";
import PostsSection from "./components/PostsSection";
import ProjectSection from "./components/ProjectSection";
const Home: React.FC = () => {
	return (
		<>
			<IntroSection />
			<ProjectSection />
			<PostsSection />
		</>
	);
};

export default Home;
