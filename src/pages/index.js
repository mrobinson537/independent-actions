import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | MR</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <div className="container-flex-full">
          <div className={`copy-max-width`}>
            <h1 className={"blue-pink"}>Hi, I'm Matt Robinson</h1>
            <p>
              Specialized in front-end development but I dabble in a bit of everything.
            </p>
            <p className={"text-center"}>{`</>`}</p>
          </div>
        </div>
      </main>
    </>
  )
}
