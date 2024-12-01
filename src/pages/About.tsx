import prof_image from "@/assets/me.webp";
import styles from "@/assets/styles/about-profile-pic.module.css";
import GetInTouch from "@/components/GetInTouch";
import ImageBlurHash from "@/components/ImageBlurHash";
import Stack from "@/components/Stack";
const About = () => {
	return (
		<>
			<section className="space-y-5">
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Hi, I'm Ayie 👋</h1>
				<ImageBlurHash src={prof_image} alt="Profile Image" width={125} height={125} className={`rounded-full shape-ou float-right ${styles.about_profile_pic} ring ring-muted-foreground ring-offset-2`} blurhash="LCDvH8E01t-C_8NHbcnh0P$%}FEM" />
				<p>Welcome to my tech journey! 🚀.  My real name is Ariel Maniago, Front-end Web Developer at <a rel="noopener noreferrer" target="_blank" href="https://cenixweb.com/">@Cenix</a> base in the Philippines</p>
				<p>I'm diving headfirst into the world of frontend web development, and it's been an exhilarating ride so far. From crafting sleek user interfaces to bringing vibrant designs to life, I'm passionate about creating experiences that captivate and engage.</p>
			</section>
			<section className="space-y-5">
				<h2 className="scroll-m-20 text-center pb-2 text-lg -tracking-tight first:mt-0 font-bold">technologies & tools I used</h2>
				<Stack />
			</section>
			<section className="space-y-5">
				<GetInTouch />
			</section>
		</>
	);
};

export default About;
