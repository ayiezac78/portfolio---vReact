import { Icon } from '@iconify/react';

const icons = [
  "typcn:html5",
  "typcn:css3",
  "mdi:language-javascript",
  "ri:reactjs-fill",
  "mdi:tailwind",
  "devicon-plain:bootstrap",
  "ion:logo-sass",
  "solar:figma-line-duotone",
  "devicon-plain:jquery-wordmark",
  "devicon-plain:php",
  "mdi:github",
  "iconoir:git",
  "devicon-plain:filezilla",
  "mdi:trello",
].map(iconName => ({ iconName }));

const Stack = () => {
  return (
    <>
      <h2 className="scroll-m-20 text-center pb-2 text-lg -tracking-tight first:mt-0 font-bold">technologies & tools I used</h2>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 justify-items-center">
        {icons.map(({ iconName }) => (
          <Icon className='text-muted-foreground' key={iconName} icon={iconName} fontSize={32} />
        ))}
      </div>
    </>
  )
}

export default Stack
