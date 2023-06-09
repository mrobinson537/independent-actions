import Head from 'next/head'
import Link from 'next/link'

const myWork = [
  {label: 'Logitech', url: 'www.logitechg.com', description: 'For the past couple of years I helped build and maintain the Logitech Websites. Primarily the Logitech G site.'},
  {label: 'Ikon Pass', url: 'www.ikonpass.com', description: 'A marketing website built to sell ski passes to the masses. Built with React and Contentful.'},
  {label: 'CMH Heli Skiing', url: 'www.cmhheli.com/', description: 'A marketing website built to sell and book helicopter driven adventures. Built with React and Contentful.'},
  {label: 'EvansHunt', url: 'www.evanshunt.com', description: 'A marketing website built to showcase a digital agencies services. Built with React (NextJS) and Contentful.'},
]

export default function Work() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <div className="container-flex-full">
          <div className={`copy-max-width`}>
            <h1>Work</h1>
            {myWork.map((item, i) => {
              return (
                <div>
                  <h2>{item.label}</h2>
                  <p>{item.description}</p>
                  <Link href={item.url}>{item.label}</Link>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}
