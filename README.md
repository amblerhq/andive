<img width="300" src="https://files-ncvscphfon.now.sh/" alt="Andive UI Library" />

Style `<div />` the Ambler way.

[Storybook](https://andive.ambler.fr)

## Getting started

- `yarn add @ambler/andive react react-dom styled-components react-helmet`

### With Next.js
- Render <Baseline /> (without child) in `pages/_app.js` render method and setup react-helmet server-side rendering (see https://github.com/zeit/next.js/tree/master/examples/with-react-helmet)

In `pages/_app.js`
```
import React from 'react'
import App, { Container } from 'next/app'
import {Baseline} from '@ambler/andive' // <- Add the CSS baseline + google font link.

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Baseline />
        <Component {...pageProps} />
      </Container>
    )
  }
}
```

In `pages/_document.js` (for react-helmet SSR support)
```
import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'

export default class extends Document {
  static async getInitialProps (...args) {
    const documentProps = await super.getInitialProps(...args)
    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...documentProps, helmet: Helmet.renderStatic() }
  }

  // should render on <html>
  get helmetHtmlAttrComponents () {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // should render on <body>
  get helmetBodyAttrComponents () {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  // should render on <head>
  get helmetHeadComponents () {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  render () {
    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          {this.helmetHeadComponents}
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
```

### With create-react-app
- With create-react-app, render <Baseline /> (without child) at the top-most component.
```
import React from 'react'
import ReactDOM from 'react-dom'
import {Baseline} from '@ambler/andive' // <- Add the CSS baseline + google font link.

ReactDOM.render(
    <>
        <Baseline />
        <App />
    </>,
    document.getElementById('root')
)
```

## API

### Style solution
  To style our components we use `styled-components`. To avoid collisions and let you configure your `styled-components` it is set as a _peerDependency_

### Typography
  TODO

### Components
  TODO

## Contribution

### Quick note

- Any contribution to fix a bug is welcome and will be duly noted. Other public contributions won't be processed because we want to keep andive close to our internal needs.

### Project dependencies and setup

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
