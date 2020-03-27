module.exports = {
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-storysource",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-viewport/register"
  ],
  stories: ["../src/components/**/**/**/**/*.stories.tsx"]
};
