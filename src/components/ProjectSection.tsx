import ProjectCards from "./ProjectCards";
import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/assets/styles/embla-carousel.module.css";
import { Link } from "react-router";
import { projectData } from "@/lib/data/project-data";

const ProjectSection = () => {
  const [emblaRef] = useEmblaCarousel();

  const emblaSlides = projectData.map((project) => (
    <div key={project.title} className={styles.embla__slide}>
      <ProjectCards github={project.github} livePreview={project.livePreview} title={project.title} description={project.description} />
    </div>
  ))
  return (
    <section className="space-y-6">
      <span className="flex justify-between items-baseline border-b pb-2">
        <span className="flex items-center gap-x-2">
          <h2 className="scroll-m-20  text-xl font-semibold tracking-tight first:mt-0 ">Projects</h2>
        </span>
        <Link to="/projects" className="text-sm font-medium text-muted-foreground hover:text-[#EF872E] transition-colors duration-200 ease-in-out">View all projects</Link>
      </span>
      <div className={`${styles.embla} overflow-hidden`} ref={emblaRef}>
        <div className={styles.embla__container}>
          {emblaSlides}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
