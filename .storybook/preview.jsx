import "../output.css";
import { ThemeProvider } from "../src/theme-provider";

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "lavenderDawn",
    toolbar: {
      icon: "circlehollow",
      items: ["lavenderMoon", "lavenderDawn"],
    },
  },
};

const withThemeProvider = (Story, context) => {

  return (
    <ThemeProvider initialTheme={context.globals.theme}>
      <div className={context.globals.theme}>
        <Story {...context} />
      </div>
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];