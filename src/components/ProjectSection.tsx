import ProjectCards from "./ProjectCards";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/assets/styles/embla-carousel.module.css";

const ProjectSection = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <section className="space-y-6">
      <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">Projects</h2>
      {/* <Carousel>
        <CarouselContent>
          <CarouselItem className="lg:basis-1/2">
            <ProjectCards />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/2">
            <ProjectCards />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/2">
            <ProjectCards />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
      <div className={`${styles.embla} overflow-hidden`} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <ProjectCards title="mp3-player" description="A client-side application written in vanilla JavaScript using the AudioContext API, which allows you to listen to your favorite music." />
          </div>
          <div className={styles.embla__slide}>
            <ProjectCards title="clinic" description="It's a full stack web application that caters to patients' online appointment scheduling. It includes a clinic management system that modernizes the old manual system of a certain clinic." />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
