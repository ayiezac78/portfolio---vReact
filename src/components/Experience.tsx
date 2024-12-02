import { CalendarDays, SquareArrowOutUpRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import { Badge } from './ui/badge'
import resume from '@/assets/Maniago_Resume.pdf';
import { Button } from './ui/button';

const companyStack = [
  'JavaScript',
  'CSS',
  'Bootstrap',
  'PHP',
  'jQuery',
]

const Experience = () => {
  return (
    <>
      <Card className='border-0'>
        <CardHeader>
          <div className='flex justify-between items-center'>
            <CardTitle>Front-end Web Developer</CardTitle>
            <span className='flex items-center gap-2'>
              <CalendarDays size={18} className='text-muted-foreground opacity-70' />
              <small className='font-medium leading-none text-muted-foreground'>Jun 2023 - Present</small>
            </span>
          </div>
          <CardDescription>Cenix - Full-time</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <small className='text-sm font-medium leading-none'>Collaborating with SEO & Content Writers for the web contents</small>
          </p>
          <p>
            <small className='text-sm font-medium leading-none'>Maintaining & enhancing web performance of several current company websites.</small>
          </p>
        </CardContent>
        <CardFooter className='flex flex-wrap items-center gap-3'>
          {companyStack.map((stack) => (
            <Badge variant={"secondary"} key={stack}>{stack}</Badge>
          ))}
        </CardFooter>
      </Card>
      <div className='text-end'>
        <Button asChild className='font-semibold leading-none rounded-full' variant={"link"}>
          <a aria-label="resume" href={resume} target="_blank" rel="noopener noreferrer">
            <SquareArrowOutUpRight size={18} />
            View Full Résumé
          </a>
        </Button>
      </div>
    </>
  )
}

export default Experience
