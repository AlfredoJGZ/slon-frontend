import { ThemeProvider } from "styled-components";

type ThemeContainerType = {
  children: React.ReactElement | React.ReactElement[];
};

const theme = {
  gold: "#e4d698",
  breakpoints: {
    md: "min-width: 768px",
  },
};

const ThemeContainer = ({ children }: ThemeContainerType) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContainer;
