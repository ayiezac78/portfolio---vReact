import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { projectData } from "@/lib/data/project-data"
import { ExternalLink, Github } from "lucide-react"

const ProjectDataTable = () => {
  const tableData = projectData.map((project) => (
    <TableRow key={project.title}>
      <TableCell className="font-medium">{project.title}</TableCell>
      <TableCell className="text-muted-foreground">{project.description}</TableCell>
      <TableCell className="text-right grid space-y-3">
        <a aria-label="github" rel="noopener noreferrer" href={project.github} className="text-muted-foreground hover:text-[#EF872E] transition-colors duration-300 ease-in-out">
          <Github size={22} />
        </a>
        <a aria-label="external link" rel="noopener noreferrer" href={project.livePreview} className="text-muted-foreground hover:text-[#EF872E] transition-colors duration-300 ease-in-out">
          <ExternalLink size={22} />
        </a>
      </TableCell>
    </TableRow>
  ))
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">name</TableHead>
          <TableHead>overview</TableHead>
          <TableHead className="text-right" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData}
      </TableBody>
    </Table>

  )
}

export default ProjectDataTable
