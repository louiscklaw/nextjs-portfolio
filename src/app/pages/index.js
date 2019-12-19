import Head from 'next/head'
import Link from 'next/link'

function IndexPage() {

  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ul>
        <li>
          <Link href="/About">
            <a>about</a>
          </Link>
          <Link href="/BuildStatus">
            <a>BuildStatus</a>
          </Link>
          <Link href="/Credits">
            <a>Credits</a>
          </Link>
          <Link href="/Helloworld">
            <a>Helloworld</a>
          </Link>
          <Link href="/Logs">
            <a>Logs</a>
          </Link>
          <Link href="/Projects">
            <a>Projects</a>
          </Link>

        </li>

      </ul>
    </div>
  )
}

export default IndexPage
