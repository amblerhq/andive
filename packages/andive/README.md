<img width="300" src="https://files-ncvscphfon.now.sh/" alt="Andive UI Library" />

Style `<div />` the Ambler way.

[Storybook](https://andive.ambler.fr)

# Getting started

- `yarn add @ambler/andive react react-dom styled-components`

## Any React project

1. Render the <Baseline /> component which reset the SPA Css.

```
import {Baseline} from '@ambler/andive'
import App from './app'

function HelloWorld() {
  return (
    <>
      <Baseline />
      <App />
    </>
  )
}
```

2. Import the Urbanist Google font (default Andive's font).

```
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Urbanist" />
</head>
```

3. Enjoy the set of components and rules andive provides :)

# API

To style our components we use `styled-components`. To avoid dependency collisions and let you configure your `styled-components` it is set as a _peerDependency_

## Typography

TODO

## Components

TODO

# Contribution

## How to release

If you are working on andive and want to share some unstable future features or refactor, do it from the canary channel. The canary channel mirrors the stable one.

### Canary workflow

Manually you:

- checkout the canary branch
- commit some changes
- `yarn release:canary`
- `git push origin canary --follow-tags`

Then CircleCI does:

- build the package
- TODO: test (removed because no test exists as of now)
- push to npm with the @canary tag

### Production workflow

Manullay you:

- checkout the master branch
- merge canary, when ready and stable, into master
- `yarn release`
- `git push origin master --follow-tags`

Then CircleCI does:

- build the package
- push to npm with the default @latest tag

### Publish the storybook

After a release is done, deploy the according storybook with:

- `yarn share`

- if canary: `now alias <outputed-now-build-url> andive-canary.ambler.fr`
- else if prod: `now alias <outputed-now-build-url> andive.ambler.fr`

## Project dependencies and setup

- Prettier
  VSCode: we let eslint format the code through eslint. Keep `editor.formatOnSave` disabled to let
  `eslint.autoFixOnSave` do his job.
- Eslint
  `eslint` uses prettier to format and disable its rules. This can be done through `eslint-plugin-prettier` and `eslint-config-prettier`,
  yet `eslint-plugin-prettier` exposes a "recommended" config that turns on both dependencies. See https://prettier.io/docs/en/eslint.html#use-both for more details.

  `babel-eslint` is the parser used to lint.

  `eslint-plugin-react` needs a configuration under `settings.react` key in `.eslintrc` to a least specify the react version. See https://github.com/yannickcr/eslint-plugin-react#configuration.

- Babel
  babel is used to transpile our components to commonjs format.

- Package versions are fixed with exact-version (except for peerDependencies because we want react and react-dom to match any minor update)
