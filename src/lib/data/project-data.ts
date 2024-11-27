interface ProjectData {
  title: string;
  description: string;
  github: string;
  livePreview: string;
}

export const projectData: ProjectData[] = [
  {
    title: "mp3-player",
    description: "A client-side application written in vanilla JavaScript using the AudioContext API, which allows you to listen to your favorite music.",
    github: "https://github.com/ayiezac78/mp3-player",
    livePreview: "https://ayiezac78.github.io/mp3-player/",
  },
  {
    title: "clinic",
    description: "It's a full stack web application that caters to patients' online appointment scheduling. It includes a clinic management system that modernizes the old manual system of a certain clinic.",
    github: "https://github.com/ayiezac78/clinic",
    livePreview: "https://clinic-orcin.vercel.app/",
  },
];