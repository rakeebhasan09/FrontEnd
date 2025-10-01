import { Helmet } from "react-helmet-async";
import Counter from "../../Home/CounterArea/Counter";
import Education from "../../Home/Education/Education";
import Experiences from "../../Home/Experiencs/Experiences";
import SkillsArea from "../../Home/SkillsArea/SkillsArea";
import AboutBanner from "../AboutBanner/AboutBanner";
import AboutMe from "../AboutMe/AboutMe";
import Testimonials from "../Testimonial/Testimonials";

const About = () => {
	return (
		<main>
			<Helmet>
				<title>Rakeeb Hasan || About</title>
			</Helmet>
			<section>
				<AboutBanner></AboutBanner>
			</section>
			<section className="pt-10 md:pt-[70px] lg:pt-[100px] xl:pt-[120px]">
				<AboutMe></AboutMe>
			</section>
			<section className="pt-10 md:pt-[70px] lg:pt-[100px] xl:pt-[120px]">
				<Counter></Counter>
			</section>
			<section>
				<Education></Education>
			</section>
			<section id="about-page-skills">
				<SkillsArea></SkillsArea>
			</section>
			<section>
				<Experiences></Experiences>
			</section>
			<section className="pb-10 md:pb-[70px] lg:pb-[100px] xl:pb-[120px]">
				<Testimonials></Testimonials>
			</section>
		</main>
	);
};

export default About;
