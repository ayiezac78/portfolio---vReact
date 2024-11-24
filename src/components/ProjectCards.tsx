import { Github } from 'lucide-react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

interface ProjectCardsProps {
  title: string
  description: string
}

const ProjectCards = ({ title, description }: ProjectCardsProps) => {
  return (
    <Card className="grid h-full grid-rows-[auto_1fr_auto]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <div className="flex-grow" /> {/* This empty div will push the footer to the bottom */}
      <CardFooter className="flex items-center justify-between">
        <Github className="h-5 w-5 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">View on GitHub</span>
      </CardFooter>
    </Card>
  )
}

export default ProjectCards

