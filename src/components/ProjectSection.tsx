import ProjectCards from "./ProjectCards";
import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/assets/styles/embla-carousel.module.css";
import { Link } from "react-router";
import { Pin } from "lucide-react";

const ProjectSection = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <section className="space-y-6">
      <span className="flex justify-between items-baseline border-b pb-2">
        <span className="text-muted-foreground flex items-center gap-x-2">
          <Pin className="h-5 w-6 rotate-45" />
          <h2 className="scroll-m-20  text-xl font-semibold tracking-tight first:mt-0 ">Projects</h2>
        </span>
        <Link to="/projects" className="text-sm font-medium text-muted-foreground hover:text-[#EF872E] transition-colors duration-200 ease-in-out">View all projects</Link>
      </span>
      <div className={`${styles.embla} overflow-hidden`} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <ProjectCards github="https://github.com/ayiezac78/mp3-player" livePreview="https://ayiezac78.github.io/mp3-player/" title="mp3-player" description="A client-side application written in vanilla JavaScript using the AudioContext API, which allows you to listen to your favorite music." />
          </div>
          <div className={styles.embla__slide}>
            <ProjectCards github="https://github.com/ayiezac78/clinic" livePreview="https://clinic-orcin.vercel.app/" title="clinic" description="It's a full stack web application that caters to patients' online appointment scheduling. It includes a clinic management system that modernizes the old manual system of a certain clinic." />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
