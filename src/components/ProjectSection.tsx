import ProjectCards from "./ProjectCards";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const ProjectSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">Projects</h2>
      <Carousel>
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
      </Carousel>

    </section>
  )
}

export default ProjectSection
