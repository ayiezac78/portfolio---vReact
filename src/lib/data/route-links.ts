type Links = {
  to: string;
  content: string | JSX.Element;
};

export const links: Links[] = [
  {
    to: "/posts",
    content: "Posts",
  },
  {
    to: "/projects",
    content: "Projects",
  },
  {
    to: "/about",
    content: "About",
  },
];
