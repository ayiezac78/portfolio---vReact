import Marquee from "react-fast-marquee";
import { Icon } from '@iconify/react';
import { ThemeProvider, useTheme } from "./theme-provider";

const icons = [
  "ri:reactjs-fill",
  "mdi:language-javascript",
  "mdi:tailwind",
  "devicon-plain:bootstrap",
  "ion:logo-sass",
  "solar:figma-line-duotone",
  "devicon-plain:jquery-wordmark",
  "devicon-plain:php",
].map(iconName => ({ iconName }));

const Stack = () => {
  const { theme } = useTheme();
  const gradientColors = theme === "dark" ? '#09090b' : '#ffffff';
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Marquee autoFill gradient={true} gradientColor={gradientColors} gradientWidth={50} speed={25} pauseOnHover>
        {icons.map((icon) => (
          <Icon key={icon.iconName} className="text-muted-foreground mx-5" icon={icon.iconName} fontSize={"3rem"} />
        ))}
      </Marquee>
    </ThemeProvider>
  )
}

export default Stack
