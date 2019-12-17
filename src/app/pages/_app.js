import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import { initGA, logPageView } from '../utils/analytics'
import { check_dev } from '../utils/common'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    // IDEA: the window.location need to run from client side
    var check_localhost = window.location.href.search('localhost') > -1
    if (check_localhost||check_dev){
      console.log('skip GA log as not in production')
    }else{
      initGA()
      logPageView()
      Router.router.events.on('routeChangeComplete', logPageView)

    }

  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}
