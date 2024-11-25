import { Github, ExternalLink } from 'lucide-react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

interface ProjectCardsProps {
  title: string
  description: string
  github: string
  livePreview: string
}

const ProjectCards = ({ title, description, github, livePreview }: ProjectCardsProps) => {
  return (
    <Card className="grid h-full grid-rows-[auto_1fr_auto]">
      <CardHeader className='p-3'>
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <div className="flex-grow" />
      <CardFooter className="flex gap-x-3">
        <a aria-label='github' rel='noopener noreferrer' target='_blank' href={github}>
          <Github className="h-5 w-5 text-muted-foreground hover:text-[#EF872E] transition-colors duration-300 ease-in-out" />
        </a>
        <a aria-label='external link' rel='noopener noreferrer' target='_blank' href={livePreview}>
          <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-[#EF872E] transition-colors duration-300 ease-in-out" />
        </a>
      </CardFooter>
    </Card>
  )
}

export default ProjectCards

