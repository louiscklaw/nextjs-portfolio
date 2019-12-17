import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <p>Hello World! this is modified</p>
    </div>
  )
}

export default IndexPage
