import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { Baseline, palette } from '@ambler/andive'
import { createGlobalStyle } from 'styled-components'

const GardenBaseline = createGlobalStyle`
  body {
    background: ${palette.lightGrey};
  }
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Asap"
          />
        </Head>
        <GardenBaseline />
        <Baseline>
          <Component {...pageProps} />
        </Baseline>
      </>
    )
  }
}
