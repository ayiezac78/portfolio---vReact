import { Button } from "./ui/button"

const GetInTouch = () => {
  return (
    <>
      <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-center'>Get In Touch</h2>
      <p className='text-lg text-muted-foreground text-center'>I’m not currently seeking new opportunities, but I’m always happy to connect. Whether you have a question or just want to say hello, don’t hesitate to drop me a message—I’ll do my best to reply!</p>
      <div className="text-center">
        <Button className="rounded-full" asChild>
          <a href="mailto:admaniago01@gmail.com">Drop me a message</a>
        </Button>
      </div>
    </>
  )
}

export default GetInTouch
