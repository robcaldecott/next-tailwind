import { IntlProvider } from "react-intl";
import "tailwindcss/tailwind.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    stylePreview: true,
  },
};

export const decorators = [
  (Story) => {
    return (
      <IntlProvider locale="en">
        <Story />
      </IntlProvider>
    );
  },
];
