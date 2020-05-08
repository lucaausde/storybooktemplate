# reactstorybook

> A template for React apps

State of development: 🐥 [May, 8. 2020]

This is a project template for [ReactJS](https://reactjs.org) apps. To simplify the development workflow, this template extends [Storybook](https://storybook.js.org) - with some addons - as well as other modules. Feel free to use, copy, modify, merge or publish this template.

## Getting started ...

1. After cloning this repository, please install all dependencies with either npm or yarn.

```bash
yarn
npm i
```

2. Once you're done downloading the dependencies, start eiter storybook or the rollup development server.

```bash
yarn storybook
yarn start
```

3. When finished developing, build the app.

```bash
yarn build
```

## New to React?

Check out their [tutorial](https://reactjs.org/tutorial/tutorial.html) or read their [documentation](https://reactjs.org/docs/getting-started.html).

## Don't know how to write stories?

Take the `Button` component as reference. `Button` is currently residing at [src/components/Button.stories.tsx](https://github.com/lucaausde/storybooktemplate/blob/master/src/components/Button.stories.tsx).

```bash
import React from "react";
import { Button } from "@storybook/react/demo";

export default { title: "Button" };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
```

## Want to use variables?

No problem, I've got you covered. You can find all variables at [src/constants/theme/defaultTheme.js](https://github.com/lucaausde/storybooktemplate/blob/master/src/constants/theme/defaultTheme.js).

---

Thank you for using my template! 🏆
